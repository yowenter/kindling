import _ from 'lodash';

// externalTypes 当前外部调用的namespace枚举值
const externalTypes: string[] = ['EXTERNAL', 'external', 'default'];
export interface TopologyProps {
    nodes: NodeProps[];
    edges: EdgeProps[];
}
interface NodeProps {
    id: string;
    name: string;
    nodeType: string;
    showNamespace: Boolean;
    calls?: number;
    latency?: number;
    errorRate?: number;
    sentVolume?: number;
    receiveVolume?: number;
    status?: string;
}
interface EdgeProps {
    source: string;
    target: string;
    dnsEdge?: boolean;
    calls?: number;
    latency?: number;
    errorRate?: number;
    sentVolume?: number;
    receiveVolume?: number;
    rtt?: number;
    retransmit?: number;
}
interface NodeDataProps {
    nodeCallsData: any[];
    nodeLatencyData: any[];
    nodeErrorRateData: any[];
    nodeSendVolumeData: any[];
    nodeReceiveVolumeData: any[];
}
interface EdgeDataProps {
    edgeLatencyData: any[];
    edgeSendVolumeData: any[];
    edgeReceiveVolumeData: any[];
    edgeRetransmitData: any[];
    edgeRTTData: any[];
}

const edgeFilter = (item: any, edge: EdgeProps) => {
    if (edge.dnsEdge) {
        return item.fields[1].labels.src_namespace === edge.source && item.fields[1].labels.dst_ip === edge.target;
    } else {
        return item.fields[1].labels.src_namespace === edge.source && item.fields[1].labels.dst_namespace === edge.target;
    }
};
// namespace 调用关系数据处理
export const nsRelationHandle = (topoData: any, nodeData: NodeDataProps, edgeData: EdgeDataProps) => {
    let nodes: NodeProps[] = [], edges: EdgeProps[] = [];
    _.forEach(topoData, item => {
        let tdata: any = item.fields[1].labels;
        let target: string;
        if (tdata.protocol === 'dns') {
            target = tdata.dst_ip;
            if (_.findIndex(nodes, {id: tdata.dst_ip}) === -1) {
                nodes.push({
                    id: tdata.dst_ip,
                    name: tdata.dst_ip,
                    nodeType: 'dns',
                    showNamespace: false
                });
            }
        } else {
            target = tdata.dst_namespace;
            if (_.findIndex(nodes, {id: tdata.dst_namespace}) === -1) {
                nodes.push({
                    id: tdata.dst_namespace,
                    name: tdata.dst_namespace,
                    nodeType: tdata.dst_namespace === 'EXTERNAL' ? 'external' : 'namespace',
                    showNamespace: false
                });
            }
        }
        if (_.findIndex(nodes, {id: tdata.src_namespace}) === -1) {
            nodes.push({
                id: tdata.src_namespace,
                name: tdata.src_namespace,
                nodeType: tdata.src_namespace === 'EXTERNAL' ? 'external' : 'namespace',
                showNamespace: false
            });
        }
        if (_.findIndex(edges, {source: tdata.src_namespace, target: target}) === -1) {
            edges.push({
                source: tdata.src_namespace,
                target: target,
                dnsEdge: tdata.protocol === 'dns'
            });
        }
    });
    nodes.forEach((node: NodeProps) => {
        if (externalTypes.indexOf(node.nodeType) === -1) {
            let callsList = _.filter(nodeData.nodeCallsData, item => item.fields[1].labels.namespace === node.id);
            let latencyList = _.filter(nodeData.nodeLatencyData, item => item.fields[1].labels.namespace === node.id);
            let errorRateList = _.filter(nodeData.nodeErrorRateData, item => item.fields[1].labels.namespace === node.id);
            let sendVolumeList = _.filter(nodeData.nodeSendVolumeData, item => item.fields[1].labels.namespace === node.id);
            let receiveVolumeList = _.filter(nodeData.nodeReceiveVolumeData, item => item.fields[1].labels.namespace === node.id);

            node.calls = callsList.length > 0 ? _.chain(callsList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
            node.latency = latencyList.length > 0 ? _.chain(latencyList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / latencyList.length / 1000000 : 0;
            node.errorRate = errorRateList.length > 0 ? _.chain(errorRateList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / errorRateList.length : 0;
            node.sentVolume = sendVolumeList.length > 0 ? _.chain(sendVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
            node.receiveVolume = receiveVolumeList.length > 0 ? _.chain(receiveVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
            
            node.status = 'green';
        }
        node.status = 'green';
    });
    _.remove(edges, edge => edge.source === edge.target);
    edges.forEach((edge: EdgeProps) => {
        let callsList = _.filter(topoData, item => edgeFilter(item, edge));
        let errorList = _.filter(callsList, item => {
            if (item.fields[1].labels.protocol === 'http') {
                return parseInt(item.fields[1].labels.status_code, 10) >= 400;
            } else if (item.fields[1].labels.protocol === 'dns') {
                return parseInt(item.fields[1].labels.status_code, 10) > 0;
            } else {
                return false
            }
        });
        let latencyList = _.filter(edgeData.edgeLatencyData, item => edgeFilter(item, edge));
        let sendVolumeList = _.filter(edgeData.edgeSendVolumeData, item => edgeFilter(item, edge));
        let receiveVolumeList = _.filter(edgeData.edgeReceiveVolumeData, item => edgeFilter(item, edge));
        let retransmitList = _.filter(edgeData.edgeRetransmitData, item => edgeFilter(item, edge));
        let rttList = _.filter(edgeData.edgeRTTData, item => edgeFilter(item, edge));

        edge.calls = callsList.length > 0 ? _.chain(callsList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.latency = latencyList.length > 0 ? _.chain(latencyList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / latencyList.length / 1000000 : 0;
        let errorValue = errorList.length > 0 ? _.chain(errorList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.errorRate = edge.calls ? errorValue / edge.calls * 100 : 0;
        edge.sentVolume = sendVolumeList.length > 0 ? _.chain(sendVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.receiveVolume = receiveVolumeList.length > 0 ? _.chain(receiveVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.rtt = rttList.length > 0 ? _.chain(rttList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.retransmit = retransmitList.length > 0 ? _.chain(retransmitList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
    });
    return { nodes, edges };
}

/**
 * 构造workload下的对应节点数据和对应调用source、target
 * @param nodes 当前节点数组
 * @param namespace 当前查询的namespace
 * @param tdata 当前遍历的原始调用数据
 * @param pre dst|src 判断当前节点使用字段的前置类型
 * @param showPod 是否为单个workload下显示pod视图
 * @returns node：当前构造的节点数据、source：tdata的调用方、target：tdata的被调用方
 */
export const detailRelationHandle = (nodes: any[], edges: any[], namespace: string, tdata: any, pre: string, showPod: boolean, workload = '') => {
    let source, target;
    let node: any = undefined;
    if (externalTypes.indexOf(tdata[`${pre}_namespace`]) > -1) {
        if (_.findIndex(nodes, node => node.namespace === tdata[`${pre}_namespace`] && node.id.indexOf(tdata[`${pre}_ip`]) > -1) > -1) {
            let tnode = _.find(nodes, node => node.namespace === tdata[`${pre}_namespace`] && node.id.indexOf(tdata[`${pre}_ip`]) > -1);
            let prots = tnode.id.substring(tnode.id.indexOf(':') + 1).split('%');
            if (prots.indexOf(tdata[`${pre}_port`]) === -1) {
                let needRenameEdges = _.filter(edges, edge => edge.source === tnode.id || edge.target === tnode.id);
                needRenameEdges.forEach(edge => {
                    if (edge.source === tnode.id) {
                        edge.source = `${tnode.id}%${tdata[`${pre}_port`]}`;
                    } else {
                        edge.target = `${tnode.id}%${tdata[`${pre}_port`]}`;
                    }   
                });
                tnode.id = `${tnode.id}%${tdata[`${pre}_port`]}`;
                tnode.name = `${tnode.name}%${tdata[`${pre}_port`]}`;
            }
            if (pre === 'dst') {
                target = tnode.id;
            } else {
                source = tnode.id;
            }
        } else {
            node = {
                id: `${tdata[`${pre}_ip`]}:${tdata[`${pre}_port`]}`,
                name: `${tdata[`${pre}_ip`]}:${tdata[`${pre}_port`]}`,
                namespace: tdata[`${pre}_namespace`],
                nodeType: 'external',
                showNamespace: false
            };
            if (pre === 'dst') {
                target = `${tdata[`${pre}_ip`]}:${tdata[`${pre}_port`]}`;
            } else {
                source = `${tdata[`${pre}_ip`]}:${tdata[`${pre}_port`]}`;
            }
        }
    } else {
        if (pre === 'dst') {
            target = `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_workload_name`]}`;
        } else {
            source = `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_workload_name`]}`;
        }
        if (showPod) {
            if (tdata[`${pre}_pod`]) {
                if (pre === 'dst') {
                    target = `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_pod`]}`;
                } else {
                    source = `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_pod`]}`;
                }
                if (_.findIndex(nodes, {id: `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_pod`]}`}) === -1) {
                    node = {
                        id: `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_pod`]}`,
                        name: tdata[`${pre}_pod`],
                        namespace: tdata[`${pre}_namespace`],
                        nodeType: 'pod',
                        showNamespace: tdata[`${pre}_namespace`] !== namespace
                    };
                }
            } else {
                if (_.findIndex(nodes, {id: `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_workload_name`]}`}) === -1) {
                    node = {
                        id: `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_workload_name`]}`,
                        name: tdata[`${pre}_workload_name`],
                        namespace: tdata[`${pre}_namespace`],
                        nodeType: tdata[`${pre}_workload_kind`],
                        showNamespace: tdata[`${pre}_namespace`] !== namespace
                    };
                }
            }
        } else {
            if (_.findIndex(nodes, {id: `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_workload_name`]}`}) === -1) {
                node = {
                    id: `${tdata[`${pre}_namespace`]}_${tdata[`${pre}_workload_name`]}`,
                    name: tdata[`${pre}_workload_name`],
                    namespace: tdata[`${pre}_namespace`],
                    nodeType: tdata[`${pre}_workload_kind`],
                    showNamespace: tdata[`${pre}_namespace`] !== namespace
                };
            }
        }
    }
    // console.log(node, source, target);
    return { node, source, target }
}

/**
 * 
 * @param nodes 节点数组
 * @param nodeData 节点的指标数据（调用次数、延时、错误率、进出流量）
 */
export const detailNodesHandle = (nodes: any[], nodeData: any) => {
    let nodelist = _.cloneDeep(nodes);
    nodelist.forEach(node => {
        if (externalTypes.indexOf(node.nodeType) === -1) {
            if (node.nodeType === 'pod') {
                let callsList = _.filter(nodeData.nodeCallsData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.pod);
                let latencyList = _.filter(nodeData.nodeLatencyData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.pod);
                let errorRateList = _.filter(nodeData.nodeErrorRateData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.pod);
                let sendVolumeList = _.filter(nodeData.nodeSendVolumeData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.pod);
                let receiveVolumeList = _.filter(nodeData.nodeReceiveVolumeData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.pod);

                node.calls = callsList.length > 0 ? _.chain(callsList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
                node.latency = latencyList.length > 0 ? _.chain(latencyList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / latencyList.length / 1000000 : 0;
                node.errorRate = errorRateList.length > 0 ? _.chain(errorRateList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / errorRateList.length : 0;
                node.sentVolume = sendVolumeList.length > 0 ? _.chain(sendVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
                node.receiveVolume = receiveVolumeList.length > 0 ? _.chain(receiveVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
            } else {
                let callsList = _.filter(nodeData.nodeCallsData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.workload_name);
                let latencyList = _.filter(nodeData.nodeLatencyData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.workload_name);
                let errorRateList = _.filter(nodeData.nodeErrorRateData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.workload_name);
                let sendVolumeList = _.filter(nodeData.nodeSendVolumeData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.workload_name);
                let receiveVolumeList = _.filter(nodeData.nodeReceiveVolumeData, item => item.fields[1].labels.namespace === node.namespace && node.name === item.fields[1].labels.workload_name);
    
                node.calls = callsList.length > 0 ? _.chain(callsList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
                node.latency = latencyList.length > 0 ? _.chain(latencyList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / latencyList.length / 1000000 : 0;
                node.errorRate = errorRateList.length > 0 ? _.chain(errorRateList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / errorRateList.length : 0;
                node.sentVolume = sendVolumeList.length > 0 ? _.chain(sendVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
                node.receiveVolume = receiveVolumeList.length > 0 ? _.chain(receiveVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
            }

            node.status = 'green';
        }
        node.status = 'green';
    });
    return nodelist;
}

export const detailEdgesHandle = (nodes: any[], edges: any[], edgeData: any) => {
    let edgelist = _.cloneDeep(edges);
    edgelist.forEach((edge: EdgeProps) => {
        let sourceNode = _.find(nodes, {id: edge.source});
        let targteNode = _.find(nodes, {id: edge.target});

        let callsList, latencyList, sendVolumeList, receiveVolumeList, retransmitList, rttList;
        // let retransmitList = _.filter(edgeData.edgeRetransmitData, item => edgeFilter(item, edge));
        // let rttList = _.filter(edgeData.edgeRTTData, item => edgeFilter(item, edge));
        if (externalTypes.indexOf(sourceNode.nodeType) > -1) {
            let ip = sourceNode.id.substring(0, sourceNode.id.indexOf(':'));
            callsList = _.filter(edgeData.edgeCallData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_ip === ip);
            latencyList = _.filter(edgeData.edgeLatencyData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_ip === ip);
            sendVolumeList = _.filter(edgeData.edgeSendVolumeData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_ip === ip);
            receiveVolumeList = _.filter(edgeData.edgeReceiveVolumeData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_ip === ip);
            retransmitList = _.filter(edgeData.edgeRetransmitData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_ip === ip);
            rttList = _.filter(edgeData.edgeRTTData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_ip === ip);
        } else if (sourceNode.nodeType === 'pod') {
            callsList = _.filter(edgeData.edgeCallData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_pod === sourceNode.name);
            latencyList = _.filter(edgeData.edgeLatencyData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_pod === sourceNode.name);
            sendVolumeList = _.filter(edgeData.edgeSendVolumeData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_pod === sourceNode.name);
            receiveVolumeList = _.filter(edgeData.edgeReceiveVolumeData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_pod === sourceNode.name);
            retransmitList = _.filter(edgeData.edgeRetransmitData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_pod === sourceNode.name);
            rttList = _.filter(edgeData.edgeRTTData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_pod === sourceNode.name);
        } else {
            callsList = _.filter(edgeData.edgeCallData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_workload_name === sourceNode.name);
            latencyList = _.filter(edgeData.edgeLatencyData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_workload_name === sourceNode.name);
            sendVolumeList = _.filter(edgeData.edgeSendVolumeData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_workload_name === sourceNode.name);
            receiveVolumeList = _.filter(edgeData.edgeReceiveVolumeData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_workload_name === sourceNode.name);
            retransmitList = _.filter(edgeData.edgeRetransmitData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_workload_name === sourceNode.name);
            rttList = _.filter(edgeData.edgeRTTData, item => item.fields[1].labels.src_namespace === sourceNode.namespace && item.fields[1].labels.src_workload_name === sourceNode.name);
        }

        if (externalTypes.indexOf(targteNode.nodeType) > -1) {
            let ip = targteNode.id.substring(0, targteNode.id.indexOf(':'));
            callsList = _.filter(callsList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_ip === ip);
            latencyList = _.filter(latencyList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_ip === ip);
            sendVolumeList = _.filter(sendVolumeList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_ip === ip);
            receiveVolumeList = _.filter(receiveVolumeList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_ip === ip);
            retransmitList = _.filter(edgeData.edgeRetransmitData, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_ip === ip);
            rttList = _.filter(edgeData.edgeRTTData, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_ip === ip);
        } else if (sourceNode.nodeType === 'pod') {
            callsList = _.filter(callsList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_pod === targteNode.name);
            latencyList = _.filter(latencyList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_pod === targteNode.name);
            sendVolumeList = _.filter(sendVolumeList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_pod === targteNode.name);
            receiveVolumeList = _.filter(receiveVolumeList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_pod === targteNode.name);
            retransmitList = _.filter(edgeData.edgeRetransmitData, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_pod === targteNode.name);
            rttList = _.filter(edgeData.edgeRTTData, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_pod === targteNode.name);
        } else {
            callsList = _.filter(callsList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_workload_name === targteNode.name);
            latencyList = _.filter(latencyList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_workload_name === targteNode.name);
            sendVolumeList = _.filter(sendVolumeList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_workload_name === targteNode.name);
            receiveVolumeList = _.filter(receiveVolumeList, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_workload_name === targteNode.name);
            retransmitList = _.filter(edgeData.edgeRetransmitData, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_workload_name === targteNode.name);
            rttList = _.filter(edgeData.edgeRTTData, item => item.fields[1].labels.dst_namespace === targteNode.namespace && item.fields[1].labels.dst_workload_name === targteNode.name);
        }
        let errorList = _.filter(callsList, item => {
            if (item.fields[1].labels.protocol === 'http') {
                return parseInt(item.fields[1].labels.status_code, 10) >= 400;
            } else if (item.fields[1].labels.protocol === 'dns') {
                return parseInt(item.fields[1].labels.status_code, 10) > 0;
            } else {
                return false
            }
        });

        edge.calls = callsList.length > 0 ? _.chain(callsList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.latency = latencyList.length > 0 ? _.chain(latencyList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() / latencyList.length / 1000000 : 0;
        let errorValue = errorList.length > 0 ? _.chain(errorList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.errorRate = edge.calls ? errorValue / edge.calls * 100 : 0;
        edge.sentVolume = sendVolumeList.length > 0 ? _.chain(sendVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.receiveVolume = receiveVolumeList.length > 0 ? _.chain(receiveVolumeList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.rtt = rttList.length > 0 ? _.chain(rttList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
        edge.retransmit = retransmitList.length > 0 ? _.chain(retransmitList).map(item => _.compact(item.fields[1].values.buffer).pop()).sum().value() : 0;
    });
    return edgelist;
}
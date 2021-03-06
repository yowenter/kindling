import React from 'react';
import { css } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { formatKMBT } from './tooltip';
import dnsPng from '../img/dns.png';
import externalPng from '../img/externel.png';
import namespacePng from '../img/namespace.png';
import workloadPng from '../img/workload.png';
import deploymentPng from '../img/deployment.png';
import daemonsetPng from '../img/daemonset.png';
import statefulsetPng from '../img/statefulset.png';
import podPng from '../img/pod.png';
import unkonwPng from '../img/unknown.png';

const imgs: any = {
    dns: dnsPng,
    external: externalPng,
    namespace: namespacePng,
    workload: workloadPng,
    deployment: deploymentPng,
    daemonset: daemonsetPng,
    statefulset: statefulsetPng,
    pod: podPng,
    unknow: unkonwPng
}

interface CProps {
    color?: string;
    title: string;
}
function ColorLegend(props: CProps) {
    const { color, title } = props;
    const styles = getStyles();
    return (<div className={styles.color_item}>
        {
            color ? <span className={styles.color_pointer} style={{ backgroundColor: color }}></span> : null
        }
        <span>{title}</span>
    </div>)
}
interface LProps {
    typeList: string[];
    metric: string;
    volumes: any;
}
function TopoLegend(props: LProps) {
    const { typeList, metric, volumes } = props;
    const styles = getStyles();

    const metricRender = () => {
        if (metric === 'latency') {
            return <div>
                <ColorLegend color="#C2C8D5" title="Normal(<20ms)"/>
                <ColorLegend color="#f3ff69" title="Warning(20ms~1000ms)"/>
                <ColorLegend color="#ff4c4c" title="AbNormal(>1000ms)"/>
            </div>
        } else if (metric === 'rtt') {
            return <div>
                <ColorLegend color="#C2C8D5" title="Normal(<100ms)"/>
                <ColorLegend color="#f3ff69" title="Warning(100ms~200ms)"/>
                <ColorLegend color="#ff4c4c" title="AbNormal(>200ms)"/>
            </div>
        } else if (metric === 'errorRate') {
            return <div>
                <ColorLegend color="#C2C8D5" title="Normal(0%)"/>
                <ColorLegend color="#ff4c4c" title="AbNormal(>0%)"/>
            </div>
        } else if (metric === 'sentVolume') {
            return <div>
                <ColorLegend title={`min Volume ${formatKMBT(volumes.minSentVolume)}`}/>
                <ColorLegend title={`max Volume ${formatKMBT(volumes.maxSentVolume)}`}/>
            </div>
        } else if (metric === 'receiveVolume') {
            return <div>
                <ColorLegend title={`min Volume ${formatKMBT(volumes.minReceiveVolume)}`}/>
                <ColorLegend title={`max Volume ${formatKMBT(volumes.maxReceiveVolume)}`}/>
            </div>
        }
        return null;
    }
    return (
        <div className={styles.legend_warp}>
            {
                typeList.map((type, idx) => <div key={idx} className={styles.legend_item}>
                    <img className={styles.legend_icon} alt="icon" src={imgs[type]}/>
                    <span>{type}</span>
                </div>)
            }
            <span>node ans call line status</span>
            {
                metricRender()
            }
        </div>
    )
}

const getStyles = stylesFactory(() => {
    return {
        legend_warp: css`
            position: absolute;
            top: 40px;
            right: 0;
            z-index: 10;
            display: flex;
            flex-direction: column;
            width: 230px;
        `,
        legend_item: css`
            height: 24px;
        `,
        legend_icon: css`
            width: 18px;
            margin-right: 10px;
        `,
        color_item: css`
            height: 24px;
        `,
        color_pointer: css`
            border-radius: 6px;
            width: 12px;
            height: 12px;
            display: inline-block;
            margin-right: 8px;
        `,
    };
});
  
export default TopoLegend;

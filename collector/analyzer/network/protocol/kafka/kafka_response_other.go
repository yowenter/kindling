package kafka

import (
	"github.com/Kindling-project/kindling/collector/analyzer/network/protocol"
	"github.com/Kindling-project/kindling/collector/model/constlabels"
)

func fastfailResponseOther() protocol.FastFailFn {
	return func(message *protocol.PayloadMessage) bool {
		return message.GetIntAttribute(constlabels.KafkaApi) <= _apiFetch
	}
}

func parseResponseOther() protocol.ParsePkgFn {
	return func(message *protocol.PayloadMessage) (bool, bool) {
		return true, true
	}
}

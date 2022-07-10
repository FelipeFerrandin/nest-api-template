import {KafkaProvider} from "./KafkaProvider"
import {Consumer} from "kafkajs"
import {Injectable} from "@nestjs/common"


@Injectable()
class KafkaConsumerProvider {

    private mConsumer: Consumer

    constructor(private readonly mKafkaProvider: KafkaProvider) {
    }

    async getConsumer() {
        return this.mConsumer || (this.mKafkaProvider.getInstance().consumer({
            groupId: 'nest-consumer1',
            allowAutoTopicCreation: true
        }))
    }

}

export {
    KafkaConsumerProvider
}
import {KafkaProvider} from "./KafkaProvider"
import {Partitioners, Producer} from "kafkajs"
import {Injectable} from "@nestjs/common"


@Injectable()
class KafkaProducerProvider {

    private mProducer: Producer

    constructor(private readonly mKafkaProvider: KafkaProvider) {
    }

    async getProducer() {
        return this.mProducer || (this.mKafkaProvider.getInstance().producer({
            allowAutoTopicCreation: true,
            createPartitioner: Partitioners.DefaultPartitioner
        }))
    }

}

export {
    KafkaProducerProvider
}
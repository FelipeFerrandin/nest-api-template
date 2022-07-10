import {Injectable, OnModuleDestroy, OnModuleInit} from "@nestjs/common"
import {KafkaTopics} from "./KafkaTopics"
import {Producer} from "@nestjs/microservices/external/kafka.interface"
import {KafkaProducerProvider} from "./KafkaProducerProvider"

@Injectable()
export class KafkaProducerAPI implements OnModuleInit, OnModuleDestroy {
    private mProducer: Producer

    constructor(private readonly mClientKafka: KafkaProducerProvider,
    ) {
    }

    async onModuleInit() {
        this.mProducer = await this.mClientKafka.getProducer()
        await this.mProducer.connect()
    }

    async onModuleDestroy() {
        await this.mProducer.disconnect()
        this.mProducer = null
    }

    async sendMessage<T>(aTopic: KafkaTopics, aMessage: T) {
        await this.mProducer.send({
            topic: aTopic,
            messages: [
                {value: JSON.stringify(aMessage)}
            ]
        })
    }

}
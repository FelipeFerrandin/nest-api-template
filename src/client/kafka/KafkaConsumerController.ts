import {Controller, OnModuleDestroy, OnModuleInit} from "@nestjs/common"
import {Consumer} from "kafkajs"
import {KafkaConsumerProvider} from "./KafkaConsumerProvider"
import {KafkaTopics} from "./KafkaTopics"

@Controller()
export class KafkaConsumerController implements OnModuleInit, OnModuleDestroy {
    private mConsumer: Consumer

    constructor(private readonly mClientKafka: KafkaConsumerProvider,
    ) {
    }

    async onModuleInit() {
        this.mConsumer = await this.mClientKafka.getConsumer()
        await this.mConsumer.connect()

        this.receiveMessage().catch(console.error)
    }

    async onModuleDestroy() {
        await this.mConsumer.disconnect()
        this.mConsumer = null
    }

    async receiveMessage() {
        await this.mConsumer.subscribe({topic: KafkaTopics.TOPIC_KAFKA_MESSAGE_TEST})
        await this.mConsumer.run({
            eachMessage: async ({message}) => {
                try {
                    const lMessage: String = JSON.parse(message.value?.toString() ?? '{}')
                    if (!lMessage) return
                    console.log(lMessage)
                } catch (e) {
                    console.error(e)
                }
            }
        })
    }

}
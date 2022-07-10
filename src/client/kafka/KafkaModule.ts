import {Global, Logger, Module} from "@nestjs/common"
import {KafkaProducerAPI} from "./KafkaProducerAPI"
import {KafkaConsumerController} from "./KafkaConsumerController"
import {KafkaProvider} from "./KafkaProvider"
import {KafkaProducerProvider} from "./KafkaProducerProvider"
import {ConfigModule} from "@nestjs/config"
import {KafkaConsumerProvider} from "./KafkaConsumerProvider"

@Global()
@Module({
    imports: [ConfigModule],
    controllers: [KafkaConsumerController],
    providers: [KafkaProvider, KafkaProducerProvider, KafkaConsumerProvider, KafkaProducerAPI, Logger],
    exports: [KafkaProducerAPI]
})
export class KafkaModule {
}
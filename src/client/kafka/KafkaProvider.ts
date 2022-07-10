import {Kafka} from "kafkajs"
import {ConfigService} from "@nestjs/config"
import ConfigurationException from "../../framework/error/ConfigurationException"
import {Injectable, Scope} from "@nestjs/common"

@Injectable({scope: Scope.DEFAULT})
class KafkaProvider {

    private readonly mKafka: Kafka

    constructor(private mConfigService: ConfigService) {
        const lKafkaBroker = this.mConfigService.get<string>("KAFKA_BROKER")

        if (!lKafkaBroker) throw new ConfigurationException('Kafka broker address not set!')

        this.mKafka = new Kafka({
            clientId: 'nest',
            brokers: [lKafkaBroker]
        })
    }


    getInstance() {
        return this.mKafka
    }

}

export {KafkaProvider}
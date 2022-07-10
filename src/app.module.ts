import {Logger, Module} from '@nestjs/common'
import {UsersModule} from './users/UsersModule'
import {ConfigModule} from '@nestjs/config'
import {PrismaModule} from "./database/prisma/PrismaModule"
import {KafkaModule} from "./client/kafka/KafkaModule"

@Module({
    imports: [
        PrismaModule,
        KafkaModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        UsersModule
    ],
})
export class AppModule {
}

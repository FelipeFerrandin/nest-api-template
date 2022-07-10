import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {PrismaService} from "./database/prisma/PrismaService"
import * as compression from 'compression'
import helmet from "helmet"
import {getCorsConfig} from "./framework/cors/CorsConfig"
import {NextFunction, Request, Response} from "express"
import {WinstonModule} from "nest-winston"
import {getLoggerConfig} from "./framework/logger/LoggerConfig"
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"


async function bootstrap() {

    const lLogger = WinstonModule.createLogger(getLoggerConfig())

    const lApp = await NestFactory.create(AppModule, {
        logger: lLogger
    })

    lApp.use((req: Request, res: Response, next: NextFunction) => {
        if (req.originalUrl !== "/") {
            lLogger.log(`Method ${req.method} - ${req.originalUrl}`)
        }
        next()
    })

    //Security
    lApp.use(helmet())
    lApp.enableCors(getCorsConfig())

    //Compress
    lApp.use(compression())

    //Database
    const prismaService = lApp.get(PrismaService)
    await prismaService.enableShutdownHooks(lApp)

    //Documentation
    const lConfig = new DocumentBuilder()
        .setTitle('API template using nest')
        .setDescription('Here are the methods used for the api model')
        .setVersion('1.0')
        .addTag('nest')
        .build()
    const lDocument = SwaggerModule.createDocument(lApp, lConfig)
    SwaggerModule.setup('api', lApp, lDocument)


    await lApp.listen(process.env.PORT_APPLICATION || 3000, () => console.log(`Service ${process.env.NAME_APPLICATION} is running on http://localhost:${process.env.PORT_APPLICATION}`))

}

bootstrap()

import {WinstonModuleOptions} from "nest-winston"
import {format, transports} from "winston"
import * as moment from "moment"

const getLoggerConfig = (): WinstonModuleOptions => {
    const lDay = moment().format("DD")
    const lMonth = moment().format("MM")
    const lYear = moment().format("YYYY")

    return {
        format: format.combine(
            format.timestamp(),
            format.cli()
        ),
        levels: {
            error: 0,
            warn: 1,
            info: 2,
            http: 3,
            verbose: 4,
            debug: 5,
            silly: 6
        },
        transports: [
            new transports.Console({level: 'info'}),
            new transports.Http({level: 'info', host: 'localhost', port: 8081}),
            new transports.File({filename: `logs/nest-template-${lYear}-${lMonth}-${lDay}.log`}),
        ]
    }
}

export {
    getLoggerConfig
}
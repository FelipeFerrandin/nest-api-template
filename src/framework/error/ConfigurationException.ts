import {HttpException, HttpStatus} from "@nestjs/common"

export default class ConfigurationException extends HttpException {
    constructor(message?: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}
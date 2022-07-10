import {HttpException, HttpStatus} from "@nestjs/common"

export default class BusinessRuleException extends HttpException {
    constructor(message?: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}
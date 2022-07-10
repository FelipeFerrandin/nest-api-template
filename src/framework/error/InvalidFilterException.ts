import {HttpException, HttpStatus} from "@nestjs/common"

export default class InvalidFilterException extends HttpException {
    constructor(message?: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}
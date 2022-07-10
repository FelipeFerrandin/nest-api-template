import {HttpException, HttpStatus} from "@nestjs/common"

export default class InvalidUrlParameterException extends HttpException {
    constructor(message?: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}
import {HttpException, HttpStatus} from "@nestjs/common"

export default class NumericConversionException extends HttpException {
    constructor(message?: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}
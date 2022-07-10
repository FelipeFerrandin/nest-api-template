import {HttpException, HttpStatus} from "@nestjs/common"

export default class DeprecatedEndpointException extends HttpException {
    constructor(message?: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}
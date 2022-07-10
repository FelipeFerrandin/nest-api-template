import {Injectable} from "@nestjs/common"
import {HttpService} from "@nestjs/axios"
import {Observable} from "rxjs"
import {AxiosResponse} from "axios"

interface Status {
    verified: boolean,
    feedback: string,
    sentCount: number
}

interface Facts {
    status: Status
    _id: string
    _v: string
    user: string
    text: string
    updatedAt: string
    sendDate: string
    deleted: boolean
    source: string
    type: string
}


@Injectable()
export class HttpAPI {
    constructor(private readonly httpService: HttpService) {
    }

    findCatFacts(): Observable<AxiosResponse<Facts[]>> {
        return this.httpService.get("/facts")
    }
}

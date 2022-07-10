import {Module} from "@nestjs/common"
import {HttpModule} from "@nestjs/axios"

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            baseURL: "https://cat-fact.herokuapp.com"
        })
    ]
})
export class HttpServiceModule {
}
import {Module} from '@nestjs/common'
import {UsersRepository} from './UsersRepository'
import {UsersController} from './UsersController'
import {UsersAPI} from "./UsersAPI"
import {IUsersAPI} from "./IUsersAPI"

@Module({
    controllers: [UsersController],
    providers: [
        {
            provide: 'IUsersRepository',
            useClass: UsersRepository
        },
        {
            provide: 'IUsersAPI',
            useClass: UsersAPI
        }
    ]
})
export class UsersModule {
}

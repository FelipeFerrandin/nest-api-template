import {ApiProperty} from "@nestjs/swagger"

class UserEntity {
    @ApiProperty()
    user_id: number
    @ApiProperty()
    email: string
    @ApiProperty()
    name: string
    @ApiProperty()
    password: string
}


export {UserEntity}
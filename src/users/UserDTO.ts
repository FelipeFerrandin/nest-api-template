import {ApiProperty} from "@nestjs/swagger"

class CreateUserDTO {
    @ApiProperty()
    email: string
    @ApiProperty()
    name: string
    @ApiProperty()
    password: string
}

class UpdateUserDTO extends CreateUserDTO {
    @ApiProperty()
    user_id: number
}

export {
    CreateUserDTO,
    UpdateUserDTO
}

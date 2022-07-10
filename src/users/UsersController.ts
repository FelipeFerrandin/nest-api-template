import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from '@nestjs/common'
import {CreateUserDTO, UpdateUserDTO} from "./UserDTO"
import {IUsersAPI} from "./IUsersAPI"
import {UserEntity} from "./UserEntity"

@Controller('users')
export class UsersController {
    constructor(@Inject('IUsersAPI') private readonly mUsersAPI: IUsersAPI) {
    }

    @Post()
    async create(@Body() aCreateUserDTO: CreateUserDTO) {
        return this.mUsersAPI.create(aCreateUserDTO)
    }

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return this.mUsersAPI.findAll()
    }

    @Get(':aUserId')
    async findOne(@Param('aUserId') aUserId: string): Promise<UserEntity> {
        return this.mUsersAPI.findOne(+aUserId)
    }

    @Put(':aUserId')
    async update(@Param('aUserId') aUserId: string, @Body() aUpdateUserDTO: UpdateUserDTO) {
        return this.mUsersAPI.update(+aUserId, aUpdateUserDTO)
    }

    @Delete(':aUserId')
    async remove(@Param('aUserId') aUserId: string) {
        return this.mUsersAPI.remove(+aUserId)
    }
}

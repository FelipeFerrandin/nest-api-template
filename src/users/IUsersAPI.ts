import {CreateUserDTO, UpdateUserDTO} from "./UserDTO"

interface IUsersAPI {

    create(aCreateUserDTO: CreateUserDTO)

    findAll()

    findOne(aUserId: number)

    update(aUserId: number, aUpdateUserDTO: UpdateUserDTO)

    remove(aUserId: number)

}

export {
    IUsersAPI
}
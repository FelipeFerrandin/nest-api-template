import {CreateUserDTO, UpdateUserDTO} from "./UserDTO"

interface IUsersRepository {

    create(aCreateUserDTO: CreateUserDTO)

    findAll()

    findOne(aUserId: number)

    update(aUserId: number, aUpdateUserDTO: UpdateUserDTO)

    remove(aUserId: number)

}

export {
    IUsersRepository
}
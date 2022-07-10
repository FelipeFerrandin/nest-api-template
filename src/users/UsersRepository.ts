import {Injectable} from '@nestjs/common'
import {PrismaService} from "../database/prisma/PrismaService"
import {CreateUserDTO, UpdateUserDTO} from "./UserDTO"
import {UserEntity} from "./UserEntity"
import {IUsersRepository} from "./IUsersRepository"

@Injectable()
export class UsersRepository implements IUsersRepository {
    constructor(private readonly mPrismaDatabase: PrismaService) {
    }

    async create(aCreateUserDTO: CreateUserDTO): Promise<void> {
        await this.mPrismaDatabase.user.create({
                data: aCreateUserDTO
            }
        )
    }

    async findAll(): Promise<UserEntity[] | null> {
        return await this.mPrismaDatabase.user.findMany()
    }

    async findOne(aUserId: number): Promise<UserEntity | null> {
        return await this.mPrismaDatabase.user.findFirst({
            where: {
                user_id: aUserId
            }
        })
    }

    async update(aUserId: number, aUpdateUserDTO: UpdateUserDTO) {
        await this.mPrismaDatabase.user.update({
            data: aUpdateUserDTO,
            where: {
                user_id: aUserId
            }
        })
    }

    async remove(aUserId: number) {
        await this.mPrismaDatabase.user.delete({
            where: {
                user_id: aUserId
            }
        })
    }
}

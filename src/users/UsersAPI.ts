import {Inject, Injectable} from '@nestjs/common'
import {CreateUserDTO, UpdateUserDTO} from './UserDTO'
import {IUsersAPI} from "./IUsersAPI"
import {IUsersRepository} from "./IUsersRepository"
import {KafkaProducerAPI} from "../client/kafka/KafkaProducerAPI"
import {KafkaTopics} from "../client/kafka/KafkaTopics"

@Injectable()
export class UsersAPI implements IUsersAPI {
    constructor(
        private readonly mKafkaProducerAPI: KafkaProducerAPI,
        @Inject('IUsersRepository') private readonly mUsersRepository: IUsersRepository
    ) {
    }

    async create(aCreateUserDTO: CreateUserDTO) {
        this.mUsersRepository.create(aCreateUserDTO)
        await this.mKafkaProducerAPI.sendMessage(KafkaTopics.TOPIC_KAFKA_MESSAGE_TEST, "Usuario inserido com sucesso")
    }

    async findAll() {
        return this.mUsersRepository.findAll()
    }

    async findOne(aUserId: number) {
        return this.mUsersRepository.findOne(aUserId)
    }

    async update(aUserId: number, aUpdateUserDTO: UpdateUserDTO) {
        return this.mUsersRepository.update(aUserId, aUpdateUserDTO)
    }

    async remove(aUserId: number) {
        return this.mUsersRepository.remove(aUserId)
    }
}

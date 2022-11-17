import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/createUsers.dto';
import { UsersEntity } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>
  ) {}

  async getUsersById(userId: string) {
    return this.userRepository.findOne({ where: { userId } });
  }

  async createUsers(createUsersDto: CreateUsersDto) {
    const createUSer = this.userRepository.create(createUsersDto);
    return this.userRepository.save(createUSer);
  }
}

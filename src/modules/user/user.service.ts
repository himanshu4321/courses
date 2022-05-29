import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepositery: Repository<User>,
  ) {}

  async addUser(user: UserDto) {
    return await this.userRepositery.save(user);
  }

  async getUser(id: string) {
    return await this.userRepositery.find({
      id: id,
    });
  }

  async getAllUser() {
    return await this.userRepositery.find();
  }

  async updateUser(updateObj: UserDto, id: string) {
    return await this.userRepositery.save({
      ...updateObj,
      id: id,
    });
  }
}

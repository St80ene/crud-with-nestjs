import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entitiy/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.age = createUserDto.age;
    user.fullName = createUserDto.fullName;
    user.gender = createUserDto.gender;
    return this.userRepository.save(user);
  }

  async findOneUser(req): Promise<any> {
    return this.userRepository.findOne(req.id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { User, UserKey } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user-table')
    private userModel: Model<User, UserKey>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userModel.create({
      id: uuidv4(),
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    return {
      message: 'User created',
      user,
    };
  }

  async findOneUser(id: string): Promise<any> {
    // const user = await this.userModel
    //   .scan(id)
    //   .contains('5e1b83a8-f875-4776-ba59-652528aee855')
    //   .exec();
    const user = await this.userModel.get({
      id,
    });
    console.log('user => ', user);

    return user;
    // return 'found';
  }

  async findAll(): Promise<any> {
    const user = this.userModel.scan().exec();
    // console.log('user => ', user);

    return user;
  }
}

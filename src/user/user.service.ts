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

  async findAll(): Promise<any> {
    try {
      return this.userRepository.find();
    } catch (error) {
      return {
        status: false,
        message: 'Error finding user',
        error: error.message,
      };
    }
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = new User();
      user.age = createUserDto.age;
      user.fullName = createUserDto.fullName;
      user.gender = createUserDto.gender;
      return this.userRepository.save(user);
    } catch (error) {
      return {
        status: false,
        message: 'Error finding user',
        error: error.message,
      };
    }
  }

  async findOneUser(req: any): Promise<any> {
    try {
      return this.userRepository.findOne(req);
    } catch (error) {
      return {
        status: false,
        message: 'Error finding user',
        error: error.message,
      };
    }
  }

  async update(req: any): Promise<any> {
    try {
      const { id, fullName, age, gender, email } = req;
      // Check if user exists
      let user = await this.findOneUser(id);
      if (!user) return { status: false, message: 'User not found' };
      if (req.age) {
        user.age = req.age;
      }
      if (req.gender) {
        user.gender = req.gender;
      }
      if (req.fullName) {
        user.fullName = req.fullName;
      }
      return this.userRepository.save(user);
    } catch (error) {
      return {
        status: false,
        message: 'Error updating user',
        error: error.message,
      };
    }
  }

  async delete(req: any): Promise<any> {
    try {
      await this.userRepository.delete(req);
      return { status: true, message: 'User deleted successfully' };
    } catch (error) {
      return {
        status: false,
        message: 'Error deleting user',
        error: error.message,
      };
    }
  }
}

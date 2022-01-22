import { Model } from 'nestjs-dynamoose';
import { User, UserKey } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User, UserKey>);
    create(createUserDto: CreateUserDto): Promise<any>;
    findOneUser(id: string): Promise<any>;
    findAll(): Promise<any>;
}

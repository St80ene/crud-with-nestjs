import { Repository } from 'typeorm';
import { User } from './entitiy/user.entity';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneUser(req: any): Promise<any>;
}

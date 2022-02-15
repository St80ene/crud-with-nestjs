import { Repository } from 'typeorm';
import { User } from './entitiy/user.entity';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<any>;
    findOneUser(req: any): Promise<any>;
    update(req: any): Promise<any>;
    delete(req: any): Promise<any>;
}

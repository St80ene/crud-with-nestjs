import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<any>;
    register(user: CreateUserDto): Promise<any>;
    getSingleUser(userId: string): Promise<any>;
    update(user: CreateUserDto): Promise<any>;
    delete(userId: string): Promise<any>;
}

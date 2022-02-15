import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entitiy/user.entity").User[]>;
    register(user: CreateUserDto): Promise<import("./entitiy/user.entity").User>;
}

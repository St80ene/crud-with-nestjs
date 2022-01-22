import { AppService } from './app.service';
import { CreateUserDto } from './user/dto/create-user.dto';
import { UserService } from './user/user.service';
export declare class AppController {
    private readonly appService;
    private readonly userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): {
        message: string;
    };
    register(user: CreateUserDto): Promise<any>;
    getSingleUser(userId: string): Promise<any>;
    getAllUsers(): any;
}

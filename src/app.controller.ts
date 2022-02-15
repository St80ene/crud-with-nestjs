import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
// import { CreateUserDto } from './user/dto/create-user.dto';
// import { UserService } from './user/user.service';

@Controller({
  path: 'api/v1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): { message: string } {
    return {
      message:
        'Welcome to my first Hello world in Nestjs Grateful to finally start the journey',
    };
  }

  // @Post('register')
  // async register(@Body() user: CreateUserDto) {
  //   return this.userService.create(user);
  // }

  // @Get('register/:id')
  // async getSingleUser(@Param('id') userId: string) {
  //   return this.userService.findOneUser(userId);
  // }

  // @Get('register')
  // getAllUsers(): any {
  //   return this.userService.findAll();
  // }

  // @Delete('delete')
}

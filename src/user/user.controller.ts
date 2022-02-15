import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
// import { UserService } from './user/user.service';

@Controller({
  path: 'api/v1',
})
export class UserController {
  constructor(
    private readonly userService: UserService // private readonly userService: UserService,
  ) {}

  @Get('users')
  getUsers(){
    return this.userService.findAll()
  }

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

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

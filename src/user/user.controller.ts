import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller({
  path: 'api/v1',
})
export class UserController {
  constructor(
    private readonly userService: UserService // private readonly userService: UserService,
  ) {}

  @Get('users')
  getUsers() {
    return this.userService.findAll();
  }

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get('register/:id')
  async getSingleUser(@Param('id') userId: string) {
    return this.userService.findOneUser(userId);
  }

  @Patch('update')
  async update(@Body() user: CreateUserDto) {
    return this.userService.update(user);
  }

  @Delete('register/:id')
  async delete(@Param('id') userId: string) {
    return this.userService.delete(userId);
  }

}

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): any {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  getSingleUser(@Param('id') userId: string): any {
    return this.userService.findOneUser(userId);
  }
}

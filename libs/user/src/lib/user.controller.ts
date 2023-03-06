import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dts';
@Controller('user')
export class UserController {
  @Post()
  user(@Body() body: CreateUserDto): CreateUserDto {
    return body;
  }
}

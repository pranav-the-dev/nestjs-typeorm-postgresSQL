import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUsersDto } from './dto/createUsers.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getUsersById/:id')
  getUsersById(@Param('itemId') itemId: string) {
    return this.usersService.getUsersById(itemId);
  }

  @Post('/createUsers')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUsers(createUsersDto);
  }
}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUser, UsersService } from './users.service';
import { UserEntity } from './users.entity';
import { UsernameQuery } from 'src/datasource/datasource.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  //   handles the post request to /users/create endpoint to create new user
  async signUp(@Body() user: CreateUser): Promise<UserEntity> {
    return await this.userService.createUser(user);
  }

  @Get('')
  async filterUser(
    @Query() usernameQuery: UsernameQuery,
  ): Promise<UserEntity[]> {
    return await this.userService.filterByUsername(usernameQuery);
  }
}

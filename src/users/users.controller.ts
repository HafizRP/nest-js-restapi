import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Users API')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @ApiOkResponse({type: User})
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    return this.userService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.userService.createUser(body);
  }
}

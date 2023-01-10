import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Hafiz' }];
  
  findAll(): User[] {
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(dto: CreateUserDTO): User {
    const newUser = { id: Date.now(), ...dto };

    this.users.push(newUser);

    return newUser;
  }
}

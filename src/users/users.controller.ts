import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() body) {
    const user = await this.usersService.findByEmail(body.email);
    const payload = {
      userId: user.id,
    };

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(body.password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    const data = {
      user: user.id,
      access_token: this.jwtService.sign(payload),
    };

    return data;
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }
}

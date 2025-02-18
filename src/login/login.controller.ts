import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { privateKey } from '../config/secret';
import * as jwt from 'jsonwebtoken';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() createLoginDto: CreateLoginDto) {
    console.log(
      '🚀 ~ LoginController ~ login ~ createLoginDto:',
      createLoginDto,
    );
    const user = await this.loginService.create(createLoginDto);
    console.log('🚀 ~ LoginController ~ login ~ user:', user);
    const { id, name } = user;
    const token = jwt.sign({ id, name }, privateKey, {
      expiresIn: '30d',
      algorithm: 'RS256',
    });
    console.log('🚀 ~ LoginController ~ login ~ token:', token);
    // 返回code 200 和token 给res

    return {
      code: 200,
      token,
    };
  }
}

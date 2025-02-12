import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() createLoginDto: CreateLoginDto) {
    console.log("🚀 ~ LoginController ~ login ~ createLoginDto:", createLoginDto)
    return this.loginService.create(createLoginDto);
  }
}

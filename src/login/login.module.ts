import { Module, NestModule } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginMiddleware } from './login.middleware';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoginMiddleware).forRoutes('login');
  }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { LoginMiddleware } from './login/login.middleware';
@Module({
  imports: [UserModule, LoginModule],
  controllers: [AppController],
  providers: [AppService,LoginMiddleware],
})
export class AppModule {}
// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoginMiddleware).forRoutes('*');
//   }
// }
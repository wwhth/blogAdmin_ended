import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
// import { LoginMiddleware } from './login/login.middleware';

// 加载 .env 文件
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env);
  // app.use(new LoginMiddleware().use)
  // 配置 全局路由前缀
  const prefix = process.env.API_PREFIX;
  if (prefix) {
    app.setGlobalPrefix(prefix);
  }
  await app.listen(process.env.SERVER_PORT ?? 3009);
}
bootstrap();

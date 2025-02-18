// logger.middleware.ts
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { publicKey } from 'src/config/secret';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class VerifyAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(11111);
    if (!req.headers.authorization) {
      throw new HttpException('请先登录', HttpStatus.UNAUTHORIZED);
    }
    const token = req.headers.authorization.replace('Bearer ', '');
    try {
      const payload = jwt.verify(token, publicKey, {
        algorithms: ['RS256'],
      });
      if (payload) {
        next();
      }
    } catch {
      throw new HttpException('请先登录', HttpStatus.UNAUTHORIZED);
    }
  }
}

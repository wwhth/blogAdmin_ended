// logger.middleware.ts
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { name, password } = req.body
        if (!name || !password) {
            // return res.json({
            //     code: 400,
            //     msg: '用户名或密码不能为空'
            // })
            throw new HttpException('用户名或密码不能为空', HttpStatus.BAD_REQUEST);
        }
        // 用prisma获取用户列表
        next();
    }
}

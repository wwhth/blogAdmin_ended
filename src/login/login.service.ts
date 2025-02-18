import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaClient } from '@prisma/client';
import md5password from 'src/utils/md5password';

const prisma = new PrismaClient();

@Injectable()
export class LoginService {
  async create(createLoginDto: CreateLoginDto) {
    console.log('🚀 ~ LoginService ~ create ~ createLoginDto:', createLoginDto);
    const userList = await prisma.user_account.findFirst({
      where: {
        name: createLoginDto.name,
      },
    });
    console.log('🚀 ~ LoginService ~ create ~ userList:', userList);
    // {
    // where: {
    //   id: 9,
    //   OR: [
    //     {
    //       name: {
    //         startsWith: 'a',
    //       },
    //     },
    //   ],
    // },
    // }
    // ();
    if (userList) {
      if (userList.password === md5password(createLoginDto.password)) {
        return {
          id: userList.id,
          name: userList.name,
          password: userList.password,
        };
      }
    }
    return null;
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    console.log('🚀 ~ LoginService ~ update ~ updateLoginDto:', updateLoginDto);
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}

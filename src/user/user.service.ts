import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  add(): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: 'teste@email.com',
        hash: 'hash',
        name: 'nome',
      },
    });
  }
}

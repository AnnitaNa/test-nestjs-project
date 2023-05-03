import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  singin() {
    return { msg: 'singin' };
  }
  singup() {
    return { msg: 'singup' };
  }
}

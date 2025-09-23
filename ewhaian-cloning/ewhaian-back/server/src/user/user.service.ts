import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return [{ id: 1, email: 'test@ewha.ac.kr', nickname: 'nickname' }];
  }
}

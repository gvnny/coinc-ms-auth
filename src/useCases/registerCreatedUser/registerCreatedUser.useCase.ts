import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import { RegisterCreatedUserUseCaseRequestDTO } from './registerCreatedUser.dto';
@Injectable()
export class RegisterCreatedUserUseCase {
  constructor(
  ) {}
  async execute(request: RegisterCreatedUserUseCaseRequestDTO): Promise<any> {

  }
}
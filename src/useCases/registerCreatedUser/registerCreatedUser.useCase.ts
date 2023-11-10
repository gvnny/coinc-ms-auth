import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  RegisterCreatedUserUseCaseRequest,
  RegisterCreatedUserUseCaseResponse,
} from './registerCreatedUser.dto';
import { Model } from 'mongoose';
import { User } from 'src/utils/database/schemas/interfaces/user.schema.interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class RegisterCreatedUserUseCase {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async execute(
    request: RegisterCreatedUserUseCaseRequest,
  ): Promise<RegisterCreatedUserUseCaseResponse> {
    const hashedPass = bcrypt.hashSync(request.password, 10);
    const userToCreate = new this.userModel({
      userId: request.userId,
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      password: hashedPass,
      registeredAt: new Date(),
      isActive: true,
      deactivatedAt: null,
    });
    const response = await userToCreate.save();
    if (!response)
      throw new BadRequestException(
        'Não foi possível registrar o usuário criado',
      );
    return {
      status: 200,
    };
  }
}

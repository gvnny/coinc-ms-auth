import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  RegisterCreatedUserUseCaseRequest,
  RegisterCreatedUserUseCaseResponse,
} from './registerCreatedUser.dto';
import { Model } from 'mongoose';
import { User } from 'src/utils/database/schemas/interfaces/user.schema.interface';
@Injectable()
export class RegisterCreatedUserUseCase {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async execute(
    request: RegisterCreatedUserUseCaseRequest,
  ): Promise<RegisterCreatedUserUseCaseResponse> {
    const createdCat = new this.userModel({
      userId: request.userId,
      name: request.name,
      email: request.email,
      registeredAt: new Date(),
      isActive: true,
      deactivatedAt: null,
    });
    const response = await createdCat.save();
    if (!response)
      throw new BadRequestException(
        'Não foi possível registrar o usuário criado',
      );
    return {
      status: 200,
    };
  }
}

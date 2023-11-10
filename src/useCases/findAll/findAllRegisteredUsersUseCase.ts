import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/utils/database/schemas/interfaces/user.schema.interface';
import { FindAllRegisteredUsersResponse } from './findAllRegisteredUsers.dto';
@Injectable()
export class FindAllRegisteredUsersUseCase {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async execute(): Promise<FindAllRegisteredUsersResponse[]> {
    const response = await this.userModel.find().exec();

    const filteredPass: FindAllRegisteredUsersResponse[] = response.map(
      (user) => {
        return {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          registeredAt: user.registeredAt,
          isActive: user.isActive,
          deactivatedAt: user.deactivatedAt,
        };
      },
    );

    return filteredPass;
  }
}

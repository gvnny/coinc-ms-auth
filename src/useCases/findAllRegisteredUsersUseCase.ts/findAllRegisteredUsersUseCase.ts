import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/utils/database/schemas/interfaces/user.schema.interface';
@Injectable()
export class FindAllRegisteredUsersUseCase {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async execute(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}

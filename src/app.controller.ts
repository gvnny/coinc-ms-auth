import { Body, Controller, Post, Inject, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  RegisterCreatedUserUseCaseRequest,
  RegisterCreatedUserUseCaseResponse,
} from './useCases/registerCreatedUser/registerCreatedUser.dto';
import { RegisterCreatedUserUseCase } from './useCases/registerCreatedUser/registerCreatedUser.useCase';
import { User } from './utils/database/schemas/interfaces/user.schema.interface';
import { Model } from 'mongoose';
@ApiTags('authentication')
@Controller('auth')
export class AppController {
  constructor(
    private readonly registerCreatedUserUseCase: RegisterCreatedUserUseCase,
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  @Post('/add-user')
  async registerCreatedUser(
    @Body() request: RegisterCreatedUserUseCaseRequest,
  ): Promise<RegisterCreatedUserUseCaseResponse> {
    return this.registerCreatedUserUseCase.execute(request);
  }

  @Get('/users')
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}

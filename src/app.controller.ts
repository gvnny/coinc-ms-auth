import { Body, Controller, Post, Inject, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllRegisteredUsersUseCase } from './useCases/findAllRegisteredUsersUseCase.ts/findAllRegisteredUsersUseCase';
import {
  RegisterCreatedUserUseCaseRequest,
  RegisterCreatedUserUseCaseResponse,
} from './useCases/registerCreatedUser/registerCreatedUser.dto';
import { RegisterCreatedUserUseCase } from './useCases/registerCreatedUser/registerCreatedUser.useCase';
import { User } from './utils/database/schemas/interfaces/user.schema.interface';
@ApiTags('authentication')
@Controller('auth')
export class AppController {
  constructor(
    private readonly registerCreatedUserUseCase: RegisterCreatedUserUseCase,
    private readonly findAllRegisteredUsersUseCase: FindAllRegisteredUsersUseCase,
  ) {}

  @Post('/add-created-user')
  async registerCreatedUser(
    @Body() request: RegisterCreatedUserUseCaseRequest,
  ): Promise<RegisterCreatedUserUseCaseResponse> {
    return this.registerCreatedUserUseCase.execute(request);
  }

  @Get('/users')
  async findAll(): Promise<User[]> {
    return this.findAllRegisteredUsersUseCase.execute();
  }
}

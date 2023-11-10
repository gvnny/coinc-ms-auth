import { Body, Controller, Post, Inject, Get, Query } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { FindAllRegisteredUsersUseCase } from './useCases/findAll/findAllRegisteredUsersUseCase';
import {
  RegisterCreatedUserUseCaseRequest,
  RegisterCreatedUserUseCaseResponse,
} from './useCases/registerCreatedUser/registerCreatedUser.dto';
import { RegisterCreatedUserUseCase } from './useCases/registerCreatedUser/registerCreatedUser.useCase';
import { User } from './utils/database/schemas/interfaces/user.schema.interface';
import { LoginUseCase } from './useCases/login/login.useCase';
import {
  LoginUseCaseRequest,
  LoginUseCaseResponse,
} from './useCases/login/login.dto';
import { FindAllRegisteredUsersResponse } from './useCases/findAll/findAllRegisteredUsers.dto';
import { VerifyRefreshTokenUseCaseRequest } from './useCases/verifyRefreshToken/verifyRefreshToken.dto';
import { VerifyRefreshTokenUseCase } from './useCases/verifyRefreshToken/verifyRefreshToken.useCase';
@ApiTags('authentication')
@Controller('auth')
export class AppController {
  constructor(
    private readonly registerCreatedUserUseCase: RegisterCreatedUserUseCase,
    private readonly findAllRegisteredUsersUseCase: FindAllRegisteredUsersUseCase,
    private readonly loginUseCase: LoginUseCase,
    private readonly verifyRefreshTokenUseCase: VerifyRefreshTokenUseCase,
  ) {}

  @Post('user/add')
  async registerCreatedUser(
    @Body() request: RegisterCreatedUserUseCaseRequest,
  ): Promise<RegisterCreatedUserUseCaseResponse> {
    return this.registerCreatedUserUseCase.execute(request);
  }

  @Get('/users')
  async findAll(): Promise<FindAllRegisteredUsersResponse[]> {
    return this.findAllRegisteredUsersUseCase.execute();
  }

  @Post('/login')
  async login(
    @Body() request: LoginUseCaseRequest,
  ): Promise<LoginUseCaseResponse> {
    return this.loginUseCase.execute(request);
  }

  @Post('/verify-refresh-token')
  async refreshToken(
    @Body() request: VerifyRefreshTokenUseCaseRequest,
  ): Promise<any> {
    return this.verifyRefreshTokenUseCase.execute(request);
  }
}

import { Controller, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterCreatedUserUseCaseRequestDTO } from './useCases/registerCreatedUser/registerCreatedUser.dto';
import { RegisterCreatedUserUseCase } from './useCases/registerCreatedUser/registerCreatedUser.useCase';
@ApiTags('Authentication')
@Controller('Auth')
export class AppController {
  constructor(private readonly registerCreatedUserUseCase: RegisterCreatedUserUseCase) {}
  
  //Api for backend ,use with the USER creation
  @Post('/')
  async registerCreatedUser(@Query('userId') request: RegisterCreatedUserUseCaseRequestDTO){
    this.registerCreatedUserUseCase.execute(request);
  }
}

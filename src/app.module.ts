import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegisterCreatedUserUseCase } from './useCases/registerCreatedUser/registerCreatedUser.useCase';
import { DatabaseModule } from './utils/database/database.module';
import { usersProvider } from './providers/users.provider';
import { FindAllRegisteredUsersUseCase } from './useCases/findAll/findAllRegisteredUsersUseCase';
import { LoginUseCase } from './useCases/login/login.useCase';
import { JWTService } from './utils/jwtService';
import { VerifyRefreshTokenUseCase } from './useCases/verifyRefreshToken/verifyRefreshToken.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    RegisterCreatedUserUseCase,
    FindAllRegisteredUsersUseCase,
    LoginUseCase,
    VerifyRefreshTokenUseCase,
    ...usersProvider,
    JWTService,
  ],
})
export class AppModule {}

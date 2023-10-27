import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegisterCreatedUserUseCase } from './useCases/registerCreatedUser/registerCreatedUser.useCase';
import { DatabaseModule } from './utils/database/database.module';
import { usersProvider } from './providers/users.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    RegisterCreatedUserUseCase,
    ...usersProvider
  ],
})
export class AppModule {}

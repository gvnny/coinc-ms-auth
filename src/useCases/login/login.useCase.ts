import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/utils/database/schemas/interfaces/user.schema.interface';
import * as bcrypt from 'bcrypt';
import { LoginUseCaseRequest, LoginUseCaseResponse } from './login.dto';
import { JWTService } from 'src/utils/jwtService';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    private jwt: JWTService,
  ) {}
  async execute(request: LoginUseCaseRequest): Promise<LoginUseCaseResponse> {
    const userFound = await this.userModel
      .findOne({ email: request.email })
      .exec();

    if (!userFound) throw new NotFoundException('Credenciais não encontradas');

    const result = await bcrypt.compareSync(
      request.password,
      userFound.password,
    );

    if (!result)
      throw new UnauthorizedException(
        'Não foi possível realizar login! Tente novamente.',
      );

    const accessToken = this.jwt.generateAccessToken(
      { userId: userFound.userId, email: userFound.email },
      '1h',
    );

    const refreshToken = this.jwt.generateRefreshToken(
      { userId: userFound.userId },
      '7d',
    );

    return {
      access_token: accessToken,
      expires_in: 3600000,
      refresh_token: refreshToken,
    };
  }
}

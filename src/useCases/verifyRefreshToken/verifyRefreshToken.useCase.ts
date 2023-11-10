import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { VerifyRefreshTokenUseCaseRequest } from './verifyRefreshToken.dto';
import { JWTService } from 'src/utils/jwtService';

@Injectable()
export class VerifyRefreshTokenUseCase {
  constructor(private readonly jwtService: JWTService) {}
  async execute(request: VerifyRefreshTokenUseCaseRequest): Promise<any> {
    try {
      const decoded = this.jwtService.verifyToken(request.refreshToken);
      return {
        isValid: true,
        userId: decoded.userId,
      };
    } catch (error) {
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
  }
}

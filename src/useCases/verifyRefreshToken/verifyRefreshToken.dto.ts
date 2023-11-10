import { ApiProperty } from '@nestjs/swagger';

export class VerifyRefreshTokenUseCaseRequest {
  @ApiProperty({ example: 'user-refresh-token' })
  refreshToken: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class LoginUseCaseRequest {
  @ApiProperty({ example: 'user-email' })
  email: string;
  @ApiProperty({ example: 'user-password' })
  password: string;
}
export type LoginUseCaseResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
};

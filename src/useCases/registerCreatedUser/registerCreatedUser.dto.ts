import { ApiProperty } from '@nestjs/swagger';

export class RegisterCreatedUserUseCaseRequest {
  @ApiProperty({ example: 'user-id' })
  userId: string;
  @ApiProperty({ example: 'user-firstname' })
  firstName: string;
  @ApiProperty({ example: 'user-lastname' })
  lastName: string;
  @ApiProperty({ example: 'user-email' })
  email: string;
  @ApiProperty({ example: 'user-password' })
  password: string;
}
export type RegisterCreatedUserUseCaseResponse = {
  status: number;
};

import { ApiProperty } from '@nestjs/swagger';

export type FindAllRegisteredUsersResponse = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  registeredAt: Date;
  isActive: Boolean;
  deactivatedAt: Date;
};

import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly registeredAt: Date;
  readonly isActive: Boolean;
  readonly deactivatedAt: Date;
}

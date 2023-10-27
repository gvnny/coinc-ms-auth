import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string;
  readonly name: number;
  readonly email: string;
  readonly registeredAt: Date;
  readonly isActive: Boolean;
  readonly deactivatedAt: Date;
}

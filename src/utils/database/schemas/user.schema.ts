import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  registeredAt: Date,
  isActive: Boolean,
  deactivatedAt: Date,
}).set('versionKey', false);

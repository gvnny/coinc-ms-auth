import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  registeredAt: Date,
  isActive: Boolean,
  deactivatedAt: Date,
}).set('versionKey', false);

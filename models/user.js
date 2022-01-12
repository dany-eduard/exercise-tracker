import mongoose from 'mongoose';
import { exerciseSchema } from './exercise.js';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    log: [exerciseSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model('User', userSchema);
export default User;

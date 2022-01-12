import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Exercise = model('Exercise', exerciseSchema);
export default Exercise;

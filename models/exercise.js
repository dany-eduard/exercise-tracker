import { Schema, model } from 'mongoose';

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    _id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = model('Exercise', exerciseSchema);
export default Exercise;

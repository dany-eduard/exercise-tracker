import Exercise from '../models/exercise.js';
import { findUserById } from './user.js';

export const saveExercise = async (req, res) => {
  const user = await findUserById(req.body._id);
  if (!user) return res.status(404).json({ error: `User with id <${req.body._id}> not found` });

  try {
    const { description, duration, date } = req.body;
    const newExercise = new Exercise({
      username: user.username,
      description,
      duration: parseInt(duration, 10),
      date: date ? new Date(date) : new Date(),
      _id: user._id,
    });
    const exerciseSaved = await newExercise.save();

    res.status(201).json({
      username: exerciseSaved.username,
      description: exerciseSaved.description,
      duration: exerciseSaved.duration,
      date: exerciseSaved.date,
      _id: exerciseSaved._id,
    });
  } catch (error) {
    res.staud(400).json({ error: error.message ?? error });
  }
};

import Exercise from '../models/exercise.js';
import { findUserById } from './user.js';

export const saveExercise = async (req, res) => {
  let user = undefined;
  try {
    user = await findUserById(req.params._id);
    if (!user)
      return res.status(404).json({
        error: `User with id <${req.params._id}> not found. If you don't have an _id, create one.`,
      });
  } catch (error) {
    return res.status(404).json({
      error: `User with id <${req.params._id}> not found. If you don't have an _id, create one.`,
    });
  }

  try {
    const { description, duration, date } = req.body;
    const newExercise = new Exercise({
      username: user.username,
      date: date ? new Date(date) : new Date(),
      duration: parseInt(duration, 10),
      description,
    });
    const exerciseSaved = await newExercise.save();

    res.status(201).json({
      _id: user._id,
      username: exerciseSaved.username,
      date: exerciseSaved.date.toDateString(),
      duration: exerciseSaved.duration,
      description: exerciseSaved.description,
    });
  } catch (error) {
    res.status(400).json({ error: error.message ?? error });
  }
};

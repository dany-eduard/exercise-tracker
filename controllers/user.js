import User from '../models/user.js';

export const createUser = async (req, res) => {
  const { username } = req.body;

  try {
    const newUser = new User({ username });
    const userCreated = await newUser.save();
    res.status(201).json({ _id: userCreated._id, username: userCreated.username });
  } catch (error) {
    res.status(400).json({ error: error.message ?? error });
  }
};

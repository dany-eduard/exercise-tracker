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

export const listUsers = async (req, res) => {
  const { name, id } = req.query;
  const query = {};
  if (name) query.username = name;
  if (id) query._id = id;

  try {
    const usersFound = await User.find(query, { _id: 1, username: 1 });
    res.status(200).json(usersFound);
  } catch (error) {
    res.status(404).json({ error: error.message ?? error });
  }
};

export const findUserById = async (_id) => await User.findById(_id);

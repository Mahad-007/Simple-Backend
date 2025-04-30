const User = require('../models/User'); // import without {}

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addUser };

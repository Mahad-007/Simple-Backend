const mongoose = require('mongoose'); // import mongoose

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// export the User model correctly
module.exports = mongoose.model('User', userSchema);

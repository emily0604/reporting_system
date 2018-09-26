const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
  name: { type: String, minLength: 1, required: true },
  description: { type: String },
});

module.exports = mongoose.model('teams', teamSchema);

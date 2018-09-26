const mongoose = require('mongoose');

const { Schema } = mongoose;

const divisionSchema = new Schema({
  name: { type: String, minLength: 1, required: true },
  description: { type: String },
});

mongoose.model('divisions', divisionSchema);

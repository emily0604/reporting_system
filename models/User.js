const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  _division: { type: Schema.Types.ObjectId, ref: 'Division' },
  _team: { type: Schema.Types.ObjectId, ref: 'Team' },
  phone: { type: String, required: true },
  role: {
    type: String,
    enum: ['member', 'team_leader', 'group_leader', 'admin'],
    default: 'member',
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('users', userSchema);

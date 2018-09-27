const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String },
  email: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String },
  address: { type: String },
  _division: { type: Schema.Types.ObjectId, ref: 'Division' },
  _team: { type: Schema.Types.ObjectId, ref: 'Team' },
  phone: { type: String },
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

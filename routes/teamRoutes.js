const mongoose = require('mongoose');

const Team = mongoose.model('teams');

module.exports = (app) => {
  app.get('/api/teams', async (req, res) => {
    const teamsList = await Team.find({});
    res.send(teamsList);
  });
};

const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    (req, res) => {
      res.redirect('/');
    });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/user_profile', (req, res) => {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send({ error: 'You are not logged in!' });
    }
  });

  app.get('/error', (req, res) => {
    res.send({ error: 'Your email not allow to access!' });
  });
};

module.exports = (app) => {
  app.get('/api/login', (req, res) => {
    res.send('API login endpoint.');
  });
};

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./db/mongoose');

require('./models/Team');
require('./models/Division');
require('./models/User');
require('./services/passport');

const app = express();
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/teamRoutes')(app);

// Start server.
const port = process.env.PORT || 5000;
app.listen(port);

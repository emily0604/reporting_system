const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

require('./models/Team');
require('./models/Division');

const app = express();
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/teamRoutes')(app);

// Start server.
const port = process.env.PORT || 5000;
app.listen(port);

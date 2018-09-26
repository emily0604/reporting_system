const express = require('express');
const bodyParser = require('body-parser');
require('./db/mongoose');

require('./models/Team');
require('./models/Division');

const app = express();
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/teamRoutes')(app);

// Start server.
const port = process.env.PORT || 5000;
app.listen(port);

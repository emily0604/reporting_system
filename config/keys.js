const production = require('./prod');
const development = require('./dev');

if (process.env.NODE_ENV === 'production') {
  module.exports = production;
} else {
  module.exports = development;
}

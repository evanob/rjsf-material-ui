'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rjsf-material-ui.cjs.production.min.js');
} else {
  module.exports = require('./rjsf-material-ui.cjs.development.js');
}

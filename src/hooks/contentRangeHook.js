//React admin expects to find in the header: Content-Range: statements 0-24/319
const Statement = require('../models/statement');

module.exports = (req, rep, done) => {
  // count total number of statements in database
  reply.header('Content-Range', `statement0-24}/${count}`);
  done();
};

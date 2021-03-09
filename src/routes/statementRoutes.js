const statementController = require('../controllers/statementController');

module.exports = (app) => {
  //create a statement
  app.post('/api/statements', statementController.create);

  //get the list of statementents
  app.get('/api/statements', statementController.fetch);

  //get a single statementent
  app.get('/api/statements:id', statementController.get);

  //update a statementent
  app.put('/api/statements:id', statementController.update);

  //delete a statementent
  app.delete('/api/statements:id', statementController.delete);
};

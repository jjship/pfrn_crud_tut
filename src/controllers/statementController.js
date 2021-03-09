const Statement = require('../models/statement');

module.exports = {
  //# create a statement
  create: async (req, rep) => {
    try {
      const statement = req.body;
      const newStatement = await Statement.create(statement);
      rep.code(201).sent(newStatement);
    } catch (e) {
      rep.code(500).send(e);
    }
  },

  //#get the list of statements
  fetch: async (req, rep) => {
    try {
      const statements = await Statement.find({});
      rep.code(200).send(statements);
    } catch (e) {
      rep.code(500).send(e);
    }
  },

  //#get a single statement
  get: async (req, rep) => {
    try {
      const statementId = req.params.id;
      const statement = await Statement.findById(statementId);
      rep.code(200).send(statement);
    } catch (e) {
      rep.code(500).send(e);
    }
  },

  //#update a statement
  update: async (req, rep) => {
    try {
      const statementId = req.params.id;
      const updates = req.body;
      await Statement.findByIdAndUpdate(statementId, updates);
      const updatedStatement = await Statement.findById(statementId);
      rep.code(200).send({ data: updatedStatement }); // as data prop cause React Admin needs it so
    } catch (e) {
      rep.code(500).send(e);
    }
  },

  //#delete a statement
  delete: async (req, rep) => {
    try {
      const statementId = req.params.id;
      const statementToDelete = await Statement.findById(statementId);
      await Statement.findByIdAndDelete(statementId);
      rep.code(200).send({ data: statementToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};

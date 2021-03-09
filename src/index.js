const fastify = require('fastify');
const { testConnection } = require('./model');
const statementRoutes = require('./routes/statementRoutes');
const contentRangeHook = require('./hooks/contentRangeHook');

//initialize Fastify App
const app = fastify();

//postgres connection
// try {
//   rows = selectAll();
//   console.log(rows);
// } catch (e) {
//   console.error(e);
// }

testConnection();

//React admin expects to find in the header: Content-Range: statements 0-24/319
app.addHook('preHandler', contentRangeHook);

statementRoutes(app);

//handle root route
app.get('/', (req, rep) => {
  try {
    rep.send('Hello World!');
  } catch (e) {
    console.error(e);
  }
});

//set app listening on port 5000
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});

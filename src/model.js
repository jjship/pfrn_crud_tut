const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  connectionString: postgres://ptnqekkdhdhmqs:04aeedb57357257526f8a4fa4e01802e30f0836fa2496ceec8874f289686ed19@ec2-54-76-215-139.eu-west-1.compute.amazonaws.com:5432/d351ufvuej2a71,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database successful');
  } catch (e) {
    console.error('Unable to connect to the database', e);
  }
}

module.exports = { testConnection };

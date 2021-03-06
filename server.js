const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// turn on connection to db and server
// force:true, drops and re-creates all of the database tables and associations on startup.
// same as DROP TABLE IF EXISTS in sql
// necessary if have new table associations???
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at https://localhost:${PORT}`));
});
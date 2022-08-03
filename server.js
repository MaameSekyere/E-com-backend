const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
});

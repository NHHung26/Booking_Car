const express = require("express");
const { engine } = require("express-handlebars");
const { sequelize } = require("./models");
const { stationRoute } = require("../src/routers/station.router");
const { companiesRoute } = require("../src/routers/companies.router");
const { userRoute } = require("../src/routers/user.router");
const app = express();

app.use(express.json());
app.use(express.static("./src/public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/api/v1", stationRoute);

app.use("/api/v1", companiesRoute);

app.use("/api/v1/user", userRoute);

app.listen(3000, async () => {
  console.log("App listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

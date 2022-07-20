const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("admindb", "admin", "secretpassword", {
  host: "mysql",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

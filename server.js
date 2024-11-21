const mongoose = require("mongoose");
const next = require("next");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const dev = process.env.NODE_ENV !== "production";
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

// DATABASE CONNECTION
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

nextServer.prepare().then(() => {
  module.exports = async (req, res) => {
    handle(req, res);
  };
});

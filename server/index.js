const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const connectDB = require("./utils/db");

const academiciansRouter = require("./routers/academicians");

connectDB();


app.use("/api/academicians", academiciansRouter);


app.listen(8080, () => {
  console.log("Example app listening on port 3000!");
});

const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const port = 3001;
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();


const whitelist = process.env.CORS_DOMAINS;
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use(bodyParser.json());

app.use("/", require("./routes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
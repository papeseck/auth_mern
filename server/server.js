const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const authRoute = require("./route/authRoute");
const app = express();


app.use(cors());
app.use(express.json());
//port 
const port = process.env.PORT || 5000

// route
//http://localhost:5000/auth*
app.use("/auth", authRoute);
app.listen(port, () => {
    console.log(`server is renning on ${port}...`);
});
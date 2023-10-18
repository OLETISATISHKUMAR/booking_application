const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")

const userRouter = require("./routes/auth.router")
app.use(cors())
app.use(express.json())

app.use("/", userRouter)

module.exports = app;

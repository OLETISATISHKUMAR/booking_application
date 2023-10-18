const User = require("../controllers/auth.controller")
const express = require("express")

const route = express.Router()

route.use("/register-user", User.create)
route.use("/login-user", User.login)
module.exports = route

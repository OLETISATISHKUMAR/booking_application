const User = require("../controllers/auth.controller")
const express = require("express")

const route = express.Router()

route.post("/register-user", User.create)
route.post("/login-user", User.login)
route.get("/getuser/:id", User.getUser)
module.exports = route

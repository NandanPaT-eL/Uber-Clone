const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");
const auth = require("../middlewares/auth.middleware");

route.post("/register", [
  body("email").isEmail().withMessage("Invalid email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be atleast 3 character long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 character long"),
],
    userController.registerUser
);

route.post("/login", [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 character long")
],
    userController.loginUser
);

route.get("/profile", auth.authUser, userController.getProfile);

route.get("/logout", auth.authUser, userController.logoutUser);

module.exports = route;
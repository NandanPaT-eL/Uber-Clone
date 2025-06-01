const captainController = require('../controllers/captain.controller');
const express = require('express');
const route = express.Router();
const { body } = require('express-validator');
const auth = require('../middlewares/auth.middleware');

route.post('/register', [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("First name must be atleast 3 character long"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be atleast 6 character long"),
    body("vehicle.color")
        .isLength({ min: 3 })
        .withMessage("Color must be atleast 3 character long"),
    body("vehicle.capacity")
        .isLength({ min: 1 })
        .withMessage("Capacity must be atleast 1 character long"),
    body("vehicle.plate")
        .isLength({ min: 3 })
        .withMessage("Plate must be atleast 3 character long"),
    body("vehicle.vehicleType")
        .isIn(["car", "motorcycle", "auto"])
        .withMessage("Vehicle type must be either car, motorcycle or auto")
    ],
    captainController.registerCaptain
)

route.post('/login', [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 character long")
],captainController.loginCaptain);

route.get('/profile', auth.authCaptain ,captainController.getProfile);
module.exports = route;

route.get('/logout', auth.authCaptain, captainController.logoutCaptain);
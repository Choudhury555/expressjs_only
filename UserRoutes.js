const express = require("express");
const {registerUser,homePage} = require("./UserController");

const router = express.Router();

router.route("/api/v1/register").post(registerUser);
router.get("/",homePage);

module.exports = router;
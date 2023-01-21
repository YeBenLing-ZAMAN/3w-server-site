const express = require("express");
const router = express.Router();

const {
  registerUser,
  authUser,
} = require("../../controller/publicController/index");


router.post("/register", registerUser);
router.post("/login", authUser);



module.exports = router;
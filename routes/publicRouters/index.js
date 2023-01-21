const express = require("express");
const router = express.Router();

const {
  registerUser,
  authUser,
  getuser
} = require("../../controller/publicController/index");

router.post("/login", authUser);
router.get("/get_all_user", getuser);
router.post("/register", registerUser);

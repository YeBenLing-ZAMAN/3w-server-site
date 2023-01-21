const express = require("express");
const router = express.Router();

const {
  registerUser,
  authUser,
  getUser
} = require("../../controller/publicController/index");


router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/get_all_user", getUser);



module.exports = router;
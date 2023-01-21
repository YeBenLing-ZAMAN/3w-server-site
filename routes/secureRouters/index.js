const express = require("express");
const router = express.Router();

const {
    createWallet,
    getWallet
} = require("../../controller/scureController/index");

router.post("/create_wallet", createWallet);
router.get("/get_user_wallet", getWallet);


module.exports = router;
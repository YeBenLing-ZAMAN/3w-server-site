const express = require('express');
const router = express.Router();

/* wallet schema get */
const Wallet = require('../Model/walletSchema');


router.post('/wallet_add', async (req, res) => {

    // console.log(req.body.data);
    const { walletAddress, requestAmount, requestType, time } = req.body.data;

    if (!walletAddress || !requestAmount || !requestType || !time) {
        return res.status(422).json({ error: "please filled properly" });
    }


    try {
        const WalletExist = await Wallet.findOne({ walletAddress: walletAddress });

        if (WalletExist) {
            return res.status(422).json({ error: "Wallet address already register" })
        }

        const wallet = new Wallet({ walletAddress, requestAmount, requestType, time });

        const walletAdd = await wallet.save();
        if (walletAdd) {
            return res.status(201).json({ message: "Wallet info add sucessfully" })
        } else {
            return res.status(500).json({ error: "Failed to add wallet info" })
        }

    } catch (err) {
        console.log(err)
    }
})


module.exports = router;
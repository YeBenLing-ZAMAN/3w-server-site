const Wallet = require("../../Model/walletSchema");

const createWallet = async (req, res) => {
  const user_id = req.auth.id;
  console.log(user_id);
  try {
    const { walletAddress, requestAmount, requestType, time } = req.body;

    if (!walletAddress || !requestAmount || !requestType || !time) {
      return res.status(422).json({ error: "please filled properly" });
    }

    const WalletExist = await Wallet.findOne({ walletAddress: walletAddress });

    if (WalletExist) {
      return res.status(422).json({ error: "Wallet address already register" });
    }

    const wallet = new Wallet({
      walletAddress,
      requestAmount,
      requestType,
      time,
    });

    const walletAdd = await wallet.save();
    if (walletAdd) {
      return res.status(201).json({ message: "Wallet info add successfully" });
    } else {
      return res.status(500).json({ error: "Failed to add wallet info" });
    }
  } catch (err) {
    console.log(err);
  }
};

const getWallet = async (_req, res) => {
  try {
    const allWalletInfo = await Wallet.find();
    res.send(allWalletInfo);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createWallet,
  getWallet,
};

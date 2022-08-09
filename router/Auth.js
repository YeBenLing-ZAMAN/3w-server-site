const express = require('express');
const router = express.Router();


/* user info */
const User = require("../Model/userSchema");


router.get('/', async (req, res) => {
    res.send('server is found! for router auth')
})

router.post('/signup', async (req, res) => {
    const data = req.body;
    const { firstName, lastName, email, phone, password, confirm_password } = req.body;
    if (!firstName || !lastName || !phone || !email || !password || !confirm_password) {
        return res.status(422).json({ error: "please filled properly" });
    }

    try {
        /* for email exieted or not */
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        }
        const user = new User({ firstName, lastName, email, phone, password, confirm_password });

        const userSignUp = await user.save();
        if (userSignUp) {
            res.status(201).json({ message: "user signup sucessfully" })
        } else {
            res.status(500).json({ error: "Failed to signup" })

        }

    } catch (err) {
        console.log(err)
    }

})

router.post('/login', async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please filled you data" });
        }

        const userLogin = await User.findOne({ email: email })
        // console.log(userLogin);
        if (userLogin) {
            res.json({ message: "user login successfully" })
        }else {
            res.status(400).json({ message: "user is not found" })
        }
    } catch (err) {
        console.log(err);
    }

})


module.exports = router;
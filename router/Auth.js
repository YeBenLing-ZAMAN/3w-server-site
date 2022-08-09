const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


/* user schema get */
const User = require("../Model/userSchema");


router.get('/', async (req, res) => {
    res.send('server is found!')
})

router.post('/signup', async (req, res) => {
    const data = req.body.data;
    // console.log(data);
    const { firstName, lastName, email, phone, password, confirm_password } = req.body.data;
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

        /* user infor store in database */
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
    console.log(req.body.data);

    const { email, password } = req.body.data;
    if (!email || !password) {
        return res.status(400).json({ error: "please filled you data" });
    }

    try {
        const userLogin = await User.findOne({ email: email })
        // console.log(userLogin); // get full information

        if (userLogin) {
            /* password checking with bcrypt */
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) {
                res.status(400).json({ message: "password wrong" })
            } else {
                res.json({ message: "user login successfully" })
            }

        } else {
            res.status(400).json({ error: "user is not register " });
        }


    } catch (err) {
        console.log(err);
    }

})

router.get('/signup', async (req, res) => {
    try {
        const allUserinfo = await User.find()
        res.send(allUserinfo);
    } catch (err) {
        console.log(err)

    }

})

router.delete('/signup', async (req, res) => {
    const allUserinfo = await User.deleteMany()
    // console.log(allWalletInfo);
    res.send(allUserinfo);

})


module.exports = router;
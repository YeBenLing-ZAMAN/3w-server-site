const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

require('./DB/Config');
const User = require('./Model/userSchema');


/* middleware */
app.use(cors());
app.use(express.json());
const middleware = (req, res,next)=>{
    console.log(`hello my middleware`);
    next();
}

/* link router  */
app.use(require('./router/Auth'))




app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})






// const userCollection = client.db("3w_busniess_private_limited").collection("userinfo");
//         const walletCollection = client.db("3w_busniess_private_limited").collection("wallet_Request_history");

//         /* wallet request for history recored routes */
//         app.get('/wallet_request', async (req, res) => {
//             const allList = await walletCollection.find().toArray();
//             // console.log(allList);
//             res.send(allList);
//         })

//         app.post('/wallet_request', async (req, res) => {
//             const data = req.body;
//             // console.log(data.data);
//             const result = await walletCollection.insertOne(data.data);
//             res.send(result);
//         })

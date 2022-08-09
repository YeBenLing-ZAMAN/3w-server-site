const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

/* mongoDB connection */
require('./DB/Config');
// const User = require('./Model/userSchema');


/* middleware */
app.use(cors());
app.use(express.json());



/* link router  */
app.use(require('./router/Auth'))
app.use(require('./router/WalletInfoStore'))




app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})



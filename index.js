const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

require('./DB/Config');

/* middleware */
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('server is found!')
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
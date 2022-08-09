const mongoose = require('mongoose');
require('dotenv').config();

const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e3qsmo2.mongodb.net/w3_jos_task?retryWrites=true&w=majority`
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`DB connection successful`);
}).catch((err)=>{
    console.log(err);
})
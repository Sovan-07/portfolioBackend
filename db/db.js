const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);
mongoose.connect("mongodb+srv://sovan07:sovan2003@cluster0.olntx.mongodb.net/portFolio")
const msgSchema = new mongoose.Schema({
    name : String,
    mail: String,
    msg : String
})
const Msg = mongoose.model('msg' , msgSchema)
module.exports = Msg;
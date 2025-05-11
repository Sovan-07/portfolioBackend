const express = require('express');
const cors = require('cors');
const msgRoute = require("../portfolioBackend/routes/msgR")
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use("/msg" , msgRoute);
app.listen(PORT , ()=>{
    console.log(`App is listening in port ${PORT}`);
    
})

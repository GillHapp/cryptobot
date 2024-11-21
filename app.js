const express = require("express");
const cors = require("cors");

const userRouter = require("./Api/Routers/userRouter");

//MIDDLEWARE
const app = express();
app.use(express.json({ limit: "100kb" }));

app.use(cors());
app.use(cors({
  origin: 'https://cryptobot-orcin.vercel.app/', // Adjust as necessary
  credentials: true,
}));

app.options("*", cors());
//const cors = require('cors');
//const cors = require('cors');
//const corsOptions ={
  //  origin:'http://localhost:3000', 
    //credentials:true,            //access-control-allow-credentials:true
    //optionSuccessStatus:200
//}
//app.use(cors(corsOptions));
//app.use(cors({ origin: '*' })); // Allow all domains (or specify Vercel domain)

//ROUTERS
app.use("https://cryptobot-orcin.vercel.app", userRouter);

module.exports = app;

require("dotenv").config();
require('express-async-errors');

// extra security pacakges 

const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');




const express = require("express");
const app = express();
const port = 8080;
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const connectDb = require("./db/connect");
app.use(express.json());

app.use(helmet())
app.use(cors())
app.use(xss())
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
}))

 

const authenticateUser = require("./middlewares/authentication");

// router
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");


app.get("/", (req, res) => {
  res.json({ chk: "Jobs APi" });
});



app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);






const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);

    console.log("db connected");
    app.listen(port, () => {
      console.log("app listening to the port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

const express = require("express");
const cors = require("cors")
const userRouter = require("./Routes/userRouter");
const { serviceRouter } = require("./Routes/serviceRouter");
const { petRouter } = require("./Routes/petRouter");
const {connection} = require("./config/connectDb");
const { adoptionRouter } = require("./Routes/adoptionRouter");



const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("this is home and Server is running successfully");
});

app.use("/user",userRouter)
app.use("/pet", petRouter)
app.use("/adopt", adoptionRouter)
app.use("/service",serviceRouter)



app.listen(process.env.PORT,async() => {
  try {
    await connection
    console.log("Server is connected to db");
    console.log(`Server is running at ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});

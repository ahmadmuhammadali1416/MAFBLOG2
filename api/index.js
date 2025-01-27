import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js";

const app = express();

dotenv.config();


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
// upload files on github

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World......");
});


app.use("/api/user/", userRoutes);


app.use(express.json()); // this is going to allow json as the input of the backend.
app.use('/api/auth', authRoutes)

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  });
});

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  });
});
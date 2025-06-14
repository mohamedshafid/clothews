// package import.
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// local import.
import { connectDB } from "./db/dbConnect.js";
import { userRouter } from "./routes/user.route.js";

// loading environment variables from .env file.
dotenv.config();

// creating an express app.
const app = express();

// connecting to the database.
connectDB();

// allowing the server to accept requests from the frontend.
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// inbuild middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/auth", userRouter);

// default route.
app.get("/", (req, res) => {
  console.log("Net Route!");
  res.send("Net Route!");
});

// starting the server.
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

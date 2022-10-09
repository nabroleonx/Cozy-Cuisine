import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import path from "path";
import User from "./models/userModel.js";
import routes from "./routes/route.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import cors from "cors";
import cohere from "cohere-ai";

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://hack-and-snack:hack-and-snack@hack-and-snack.bnjwpvt.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to the Database successfully");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    try {
      const accessToken = req.headers["x-access-token"];
      const { userId, exp } = await jwt.verify(
        accessToken,
        process.env.JWT_SECRET
      );
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: "JWT token has expired, please login to obtain a new one",
        });
      }
      res.locals.loggedInUser = await User.findById(userId);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});
console.log("env", process.env.JWT_SECRET);

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});

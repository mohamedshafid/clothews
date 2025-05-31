// package import.
import express from "express";

// local import.
import { signIn, signOut, signUp } from "../controllers/user.controller.js";

// creating a user router.
const userRouter = express.Router();

// defining user routes.
userRouter.post("/sign-in", signIn);
userRouter.post("/sign-up", signUp);
userRouter.get("/sign-out", signOut);

export { userRouter };

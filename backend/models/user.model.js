// package import.
import mongoose from "mongoose";

// user schema.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// creating a user model.
export const User = mongoose.models.User || mongoose.model("user", userSchema);



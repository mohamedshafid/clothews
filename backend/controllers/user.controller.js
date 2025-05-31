// package import.
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// local import.
import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
  // Destructuring the request body to get user details.
  const { name, email, password } = req.body;
  try {
    // Check if all fields are filled
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all fields", success: false });
    }
    // Check if the user already exists
    const user = await User.findOne({
      email: email,
    });
    // If user already exists, return an error
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance and save it to the database
    const newUser = await User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate a JWT token for the new user
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // saving the token in the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    // Respond with success message and user details
    res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser: {
        id: newUser._id,
        name,
        email,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  // Destructuring the request body to get user credentials.
  const { email, password } = req.body;
  try {
    // Check if all fields are filled
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all fields", success: false });
    }
    // Find the user by email
    const user = await User.findOne({ email: email });
    // If user not found, return an error
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }
    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }
    // Generate a JWT token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // saving the token in the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 3600000,
    });

    // Respond with success message and user details
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const signOut = async (req, res) => {
  try {
    // Clear the cookie by setting it to an empty value and a past expiration date
    // This effectively logs the user out by removing the token from the client.
    res.clearCookie("token", { path: "/" });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

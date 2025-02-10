//the logic for handling incoming requests and returning responses to the client
// handles user registration, login and token issuance
import bcrypt from "bcryptjs";
import { Prisma, PrismaClient } from "@prisma/client";
import { generateToken } from "../utils/jwtUtils.js";

const prisma = new PrismaClient();

// r1. register a new user with a username and password
const register = async (req, res) => {
  const { email, password } = req.body;
  console.log("email: ", email);
  console.log("password", password)

  try {
    const existingUser = await prisma.user.findUnique({ where:{email}, });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.user.create({
      data:{
        email, 
        password: hashedPassword
      },
     });
    //  const token = generateToken({userId:newUser.id}, "24h");
    // With Token (User is logged in right after registration):
    res.status(201).json({ message: "User registered successfully",
      //token,
     });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Server error: User registration failed",
      error: error.message,
    });
  }
};

// r2.login user with their credentials. upon login, issue a token valid for 24 hours for auth requests
const login = async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({where:{email} });
    if (!user) {
      return res.status(401).json({ error: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Password is incorrect" });
    }
    // issue token for 24h
    const token = generateToken({ userId: user._id }, "24h");
    // payload contains userid which identifies authenticated user,
    res.status(200).json({"message":"Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error", error:error.message });
  }
};

export { register, login };

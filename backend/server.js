import express from 'express'
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import cors from "cors";

import pkg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

import userRoutes from './routes/user.route.js'
import resourceRoutes from './routes/resource.route.js'
import authRoutes from './routes/auth.route.js'

// dotenv.config();

const app = express();
// middleware
// app.use(express.static("public"));
app.use(express.json());
//app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use("/api/auth", authRoutes);

// database connection

const connectionString = `${process.env.DATABASE_URL}`
const { Pool } =pkg;
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

/** rate limiting */
// Create a rate limiter with the desired configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // limit each ip to 100 requests per windoMs
  message: "Too many requests, please try again later",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/api/", apiLimiter); // Protect all routes starting with `/api/`

// routes

// Example of an open route that is not rate-limited
app.get("/", (req, res) => {
  res.send("Welcome to the open route");
});

app.get("/api", (req, res) => {
  res.json({
    message:
      "This is a response from the API for secured app",
  });
});

app.use("/api/users",userRoutes);
app.use("api/resource",resourceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
  console.log( `Listening to requests on port ${PORT}`); 
})
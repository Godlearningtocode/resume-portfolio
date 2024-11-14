/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined in environment variables');
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.post("/api/contact", (req, res) => {
  // Save contact form data to database
  res.status(200).send("Contact form submitted");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

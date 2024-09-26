import express from "express"
import cors from "cors"
import connectDB from "./db/connectDB.js"
import categoryRoute from "./routes/category.route.js"
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use('/api/v1/categories', categoryRoute);

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Server Setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
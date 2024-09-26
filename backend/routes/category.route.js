import express from "express"
import multer from "multer"
import { uploadCategories } from "../controllers/category.controller.js"

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route for uploading Excel file
router.post('/upload', upload.single('file'), uploadCategories);

export default router

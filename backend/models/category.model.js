import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    parentCategory: { type: String },
    image: { type: String }, 
    status: { type: Boolean, default: false },
    discount: { type: Number, default: 0 },
});

export const Category = mongoose.model('Category', categorySchema);


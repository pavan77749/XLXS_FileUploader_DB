import {Category} from "../models/category.model.js"
import xlsx from "xlsx"

export const uploadCategories = async (req, res) => {
    try {
        const file = req.file;
        const workbook = xlsx.read(file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const categories = xlsx.utils.sheet_to_json(sheet);

        let duplicateCategories = [];

        for (let i = 0; i < categories.length; i++) {
            const { name, description, parentCategory, image, status, discount } = categories[i];
            
            // Check for duplicate category name in database
            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
                duplicateCategories.push({ row: i + 2, name });
            } else {
                const category = new Category({
                    name,
                    description,
                    parentCategory,
                    image,
                    status: Boolean(status),
                    discount: Number(discount),
                });
                await category.save();
            }
        }

        if (duplicateCategories.length > 0) {
            return res.status(400).json({
                message: 'Duplicate categories found',
                duplicates: duplicateCategories,
            });
        }

        res.status(200).json({ message: 'Categories uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading categories', error: error.message });
    }
};
# Category Upload Tool with Duplicate Validation

This project allows you to upload a list of categories from an Excel file into a MongoDB database. It includes validation to ensure that no duplicate category names are uploaded. If there are any duplicate categories either within the Excel file or in the database, they will be flagged with their corresponding row numbers after the upload process is complete.

## Features

- **Upload Excel File**: Upload categories via an Excel file (.xlsx format).
- **Duplicate Validation**: Validates that no duplicate category names are uploaded to the database.
- **Display Duplicates**: Identifies and displays any duplicate categories with their respective row numbers after the upload is completed.

## Prerequisites

Ensure that the following are installed before running the project:

- **Node.js** version: `v21.7.1`
- **React.js** version: `18.3.1`
- **MongoDB**
- **xlsx npm package** (for reading Excel files)
- **Mongoose** (for MongoDB)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pavan77749/XLXS_FileUploader_DB
   ```

2. **Install Dependencies**:

   - **Frontend**:

     ```bash
     cd frontend
     npm install
     ```

   - **Backend**:

     ```bash
     cd backend
     npm install
     ```

3. **Start the Application**:

   - **Backend**:

     ```bash
     cd backend
     npm run dev
     ```

   - **Frontend**:

     ```bash
     cd frontend
     npm start
     ```

   The app will run on `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend.

## Usage

1. **Configure MongoDB Atlas**:  
   Add your MongoDB Atlas URI to the `.env` file in the backend:

   ```bash
   MONGO_URI=your_mongo_db_atlas_uri
   ```

2. **Upload Categories**:  
   After starting the app, go to `http://localhost:3000` and upload an Excel file with a column named `Category`. The system will validate the file, detect duplicates, and flag them with their respective row numbers.

3. **View Results**:  
   After the upload, the tool will display a list of any duplicate categories found, along with their row numbers in the Excel file.

## No Additional Changes Needed

Simply configure the MongoDB connection, and the system will handle the rest. No additional changes are required for this tool to function.




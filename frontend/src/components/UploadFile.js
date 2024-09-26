import React, { useState } from 'react';
import axios from 'axios';
import "./UploadFile.css"

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [duplicates, setDuplicates] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/v1/categories/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setMessage(response.data.message);
            setDuplicates([]);
        } catch (error) {
            if (error.response && error.response.data.duplicates) {
                setMessage('Duplicate categories found:');
                setDuplicates(error.response.data.duplicates);
            } else {
                setMessage('Error uploading file');
            }
        }
    };

    return (
        <div className='containerStyle'>
            <h2>Upload Category File in XLSX</h2>
            <form onSubmit={handleSubmit} className='formStyle'>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>

            {message && <p>{message}</p>}
            {duplicates.length > 0 && (
                <div className='duplicateError'>
                    <h3>Duplicate Entries:</h3>
                    <ul>
                        {duplicates.map((dup, idx) => (
                            <li key={idx}>Row {dup.row}: {dup.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UploadFile;

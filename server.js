const express = require('express');
const dbOperation = require('./dbfiles/dbOperation');
const cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use extended to parse nested objects
app.use(cors());

// Route to handle form submission
app.post('/submitComplaint', async (req, res) => {
    const { name, address, complaintType, complaintText } = req.body;
    try {
        // Insert form data into the database
        await dbOperation.insertComplaint(name, address, complaintType, complaintText);
        res.status(200).json({ success: true, message: 'Complaint submitted successfully.' });
    } catch (error) {
        console.error('Error submitting complaint:', error);
        res.status(500).json({ success: false, message: 'Failed to submit complaint.' });
    }
});

app.listen(API_PORT, () => console.log(`Server is running on port ${API_PORT}`));

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

// Import the InputFileUpload component here
import InputFileUpload from './InputFileUpload';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [complaintText, setComplaintText] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleComplaintTypeChange = (event) => {
    setComplaintType(event.target.value);
  };

  const handleComplaintChange = (event) => {
    setComplaintText(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic (e.g., send complaint report to the server)
    const formData = {
      name,
      address,
      complaintType,
      complaintText,
    };
    console.log('Form data submitted:', formData);
    // Add your logic to handle the complaint submission (e.g., send it to the server)
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          padding: 2,
          boxShadow: 1,
          borderRadius: 4,
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Complaint Form
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={handleAddressChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel id="complaint-type-label">Complaint Type</InputLabel>
          <Select
            labelId="complaint-type-label"
            id="complaint-type"
            value={complaintType}
            onChange={handleComplaintTypeChange}
            label="Complaint Type"
          >
            <MenuItem value="Noise Complaint">Noise Complaint</MenuItem>
            <MenuItem value="Garbage Collection Issue">Garbage Collection Issue</MenuItem>
            <MenuItem value="Street Light Outage">Street Light Outage</MenuItem>
            <MenuItem value="Traffic Violation">Traffic Violation</MenuItem>
            {/* Add more complaint types as needed */}
          </Select>
        </FormControl>
        <TextField
          label="Enter your complaint"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={complaintText}
          onChange={handleComplaintChange}
          margin="normal"
        />
        {/* Add the InputFileUpload component here */}
        <InputFileUpload />
        <Box marginTop={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Complaint
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ComplaintForm;

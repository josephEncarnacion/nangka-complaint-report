// ComplaintReport.js
import React from 'react';
import ComplaintForm from '../components/FormPropsTextFields';
import Typography from '@mui/material/Typography';

const ComplaintReport = () => {
  return (
    <div>
    <Typography align="center" variant="h5" gutterBottom>
    Complaint Form
    </Typography>
      <ComplaintForm />
    </div>
  );
};

export default ComplaintReport;

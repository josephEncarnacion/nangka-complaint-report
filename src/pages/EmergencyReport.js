// EmergencyReport.js
import React from 'react';
import ComplaintForm from '../components/FormPropsTextFields';
import Typography from '@mui/material/Typography';

const EmergencyReport = () => {
  return (
    <div>
        <Typography align="center" variant="h5" gutterBottom>
    Emergency Form
    </Typography>
      <ComplaintForm />
    </div>
  );
};

export default EmergencyReport;

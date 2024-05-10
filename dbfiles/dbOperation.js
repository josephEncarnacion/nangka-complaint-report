const config = require('./dbConfig');
const sql = require('mssql');

const insertComplaint = async (name, address, complaintType, complaintText) => {
    try {
        let pool = await sql.connect(config);
        const query = `
            INSERT INTO Complaint_tbl (Name, Address, ComplaintType, ComplaintText)
            VALUES (@name, @address, @complaintType, @complaintText)
        `;
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('address', sql.VarChar, address)
            .input('complaintType', sql.VarChar, complaintType)
            .input('complaintText', sql.VarChar, complaintText)
            .query(query);
        console.log('Complaint inserted successfully.');
    } catch (error) {
        console.error('Error inserting complaint:', error);
        throw error;
    }
};
const insertEmergencyReport = async (name, address, emergencyType, emergencyText) => {
    try {
        let pool = await sql.connect(config);
        const query = `
            INSERT INTO Emergencyy_tbl (Name, Address, EmergencyType, EmergencyText)
            VALUES (@name, @address, @emergencyType, @emergencyText)
        `;
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('address', sql.VarChar, address)
            .input('emergencyType', sql.VarChar, emergencyType)
            .input('emergencyText', sql.VarChar, emergencyText)
            .query(query);
        console.log('Emergency report inserted successfully.');
    } catch (error) {
        console.error('Error inserting emergency report:', error);
        throw error;
    }
};


module.exports = {
    insertEmergencyReport,
    insertComplaint
};
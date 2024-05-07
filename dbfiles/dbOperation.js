const config  = require('./dbConfig'),
      sql     = require ('mssql')
    
const getReport = async() =>{
    try{
        let pool = await sql.connect(config)
        let report = pool.request().query("SELECT * from Complaint_tbl")
        console.log(report);
        return report;
    }
    catch(error){
        console.log(error); 
    }   
}

module.exports = {
    getReport
}
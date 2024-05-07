const config ={
    user: 'Enc',
    password: '12345',
    server: 'DESKTOP-BNS5JLK',
    database: 'ComplaintReport',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}
module.exports = config;

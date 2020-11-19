const mysql = require('mysql');
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "481526",
    database: "Attendance",
    port:"3306",
    connectTimeout:"15000" 
    
});
module.exports=connection.promise();
const mysql = require('mysql2');
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1223",
    database: "sa",
    port:"3306",
    connectTimeout:"15000",
    timezone:'system'
    
});
module.exports=connection.promise();
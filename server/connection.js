const mysql = require('mysql2');
const connection = mysql.createPool({
    host: "localhost",
    user: "test",
    password: "481526",
    database: "sa",
    port:"3306",
    connectTimeout:"15000",
    timezone:'Z'
    
});

module.exports=connection.promise();
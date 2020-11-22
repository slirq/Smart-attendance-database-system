
const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name;
    let sec = req.body.sec;
    let sql = `insert into student values(?,?,(select SHA2(?,256)),?);`
    let values=[`${usn}`,`${name}`,`${password}`,`${sec}`]
    const [result,fields] = await db.execute(sql,values)
    console.log(sql)
}
   
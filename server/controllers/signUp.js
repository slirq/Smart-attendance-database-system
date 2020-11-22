
const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name;
    let sec = req.body.sec;
    let sql = `insert into student values("${usn}","${name}",(select SHA2('${password}',256)),"${sec}");`
    const [result,fields] = await db.execute(sql)
    console.log(sql)
}
   
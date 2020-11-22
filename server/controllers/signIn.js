const db = require('../connection');
exports.signIn = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let sql = ` (select SHA2('${password}',256) like (select passwordhash from student where usn='${usn}'));`
    // console.log(password);
    const [result,fields] = await db.execute(sql)
    console.log(result)

}

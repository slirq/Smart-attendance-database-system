
const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name;
    let sec = req.body.sec;
    let sql = `insert into student values(?,?,?,(select SHA2(?,256)));`
    let values=[`${usn}`,`${sec}`,`${name}`,`${password}`]
    try{
        // console.log(values)
        const [result,fields] = await db.execute(sql,values)
        console.log(result.affectedRows)
        res.status(200).json({reply:result.affectedRows})
    }
    catch(e){ console.log("t'was an error",e.sqlMessage,"\n\n",e    )}
    
}
   
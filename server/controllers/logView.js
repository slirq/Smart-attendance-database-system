const db = require('../connection');

exports.logView=async (req,res)=>{
    let subject = req.body.subject
    let reply 
    try{    
            let sql = `select * from attendancelog where subject="${subject}"`
            const [result,f] = await db.execute(sql)
            console.log(result)}
    catch(err){
        console.log("\n\n\nerror was this\n\n\n",err)
    }
    res.status(200).json(reply)
}
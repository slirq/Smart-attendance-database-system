const db = require('../connection');

exports.logView=async (req,res)=>{
    let subject = req.body.subject
    let reply =[]
    try{    
            let sql = `select * from attendancelog where subject_name="${subject}"`
            const [result,f] = await db.execute(sql)
            result.map(item=>reply.push({"USN":item.USN,"TS":item.TIMESTAMP}))
            console.log(result)}
    catch(err){
        console.log("\n\n\nerror was this\n\n\n",err)
    }
    res.status(200).json(reply)


    
}
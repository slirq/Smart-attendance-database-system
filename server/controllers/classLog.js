const db = require("../connection")
exports.classLog=async (req,res)=>{
    let uniqueID = req.body.uniqueID
    let log = req.body.log
    let days = req.body.days
    let section = req.body.section
    let subject = req.body.subject

    let reply
    try{    
        let sql = `insert into classes values ("${uniqueID}","${log}");`
        let sql2 = `update totalclasses set ${subject}=${subject}+${days} where section="${section}";`
        const [result , f] = await db.execute(sql)
        const [result2 , f2] = await db.execute(sql2)
        reply =  {"result":result.affectedRows===1?true:false}
        //reply2 =  {"resulttotalclasses":result2.affectedRows===1?true:false}
    }
    catch(err){
        console.log("\n\nerror is here \n\n",err)
    }
    res.status(200).json(reply)
   // res.status(200).json(reply2)


}
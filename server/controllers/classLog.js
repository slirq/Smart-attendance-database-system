const db = require("../connection")
exports.classLog=async (req,res)=>{
    let uniqueID = req.body.uniqueID
    let log = req.body.log
    let reply
    try{    
        let sql = `insert into classes values ("${uniqueID}","${log}");`
        const [result , f] = await db.execute(sql)
        reply =  {"result":result.affectedRows===1?true:false}
    }
    catch(err){
        console.log("\n\nerror is here \n\n",err)
    }
    res.status(200).json(reply)

}
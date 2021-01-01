const db = require('../connection');

exports.classLogView=async (req,res)=>{
    let id = req.body.Tid
    console.log("catched logview")
    let reply = []
    try{    
        console.log("hui from bacjk")
            let sql = `select * from classes where id="${id}";`
            console.log(req.body)
            const [result,f] = await db.execute(sql)
            
            result.map(item=>reply.push({"id":item.id,"log":item.LOG}))
            
           // console.log(result)
        }
    catch(err){
        console.log("\n\n\nerror was this\n\n\n",err)
    }
    res.status(200).json(reply)


    
}
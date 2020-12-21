const db = require('../connection');
exports.attendanceView=async (req,res)=>{
    let {subject,section } =req.body
    let reply = []
    console.log(subject)
    try {
        let sql = `select usn,${subject} from attendance_summary where section="${section}";`
        const [result,f] = await db.execute(sql)
        result.map(item=>reply.push({"USN":item.usn,"ATT":item[`${subject}`]}))
        console.log("reply from av",reply) 
    } catch (error) {
        console.log("\n\n\nerr is here\n\n\n",error)
    }
    
    res.status(200).json(reply)
}
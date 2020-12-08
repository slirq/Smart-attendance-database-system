const db = require('../connection');
exports.stuDashBoard = async (req,res)=>{
    let usn = req.body.uniqueID
    let sqlForTSA = `select * from totalstudentattendance where USN = "${usn}" `
    let sqlForStu = `select * from student where USN = "${usn}" `
    let reply=[]
    // console.log("\n",usn ,"\n")
    let FinalResultForTSA;
    let FinalResultForStu;
    try {
        const [resultForTSA,fTSA] = await  db.execute(sqlForTSA)
        const [resultForStu,fStu] = await  db.execute(sqlForStu)
        // console.log("result is ",result)
        resultForTSA.map(obj=>FinalResultForTSA = Object.values(obj))
        resultForStu.map(obj=>FinalResultForStu= Object.values(obj))
        reply.push(FinalResultForTSA)
        reply.push(FinalResultForStu)
        console.log("there was a hit ",reply)
    } catch (error) {
        console.log("error yahan h\n",error)
    }
    res.status(200).json(reply)
}
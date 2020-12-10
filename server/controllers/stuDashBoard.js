const db = require('../connection');
exports.stuDashBoard = async (req,res)=>{
    let usn = req.body.uniqueID
    let sqlForTSA = `select * from totalstudentattendance where USN="${usn}" `
    let sqlForStu = `select USN,NAME from student where USN = "${usn}"`
    let sqlForTC = `select * from totalclasses`
    let reply=[]
    // console.log("\n",usn ,"\n")
    let FinalResultForTSA;
    let FinalResultForStu;
    let FinalResultForTC;
    try {
        const [resultForTSA,fTSA] = await  db.execute(sqlForTSA)
        const [resultForStu,fStu] = await  db.execute(sqlForStu)
        const [resultForTC,fTC] = await  db.execute(sqlForTC)
        // console.log("result is ",result)
        resultForTSA.map(obj=>FinalResultForTSA = Object.values(obj))
        resultForStu.map(obj=>FinalResultForStu= Object.values(obj))
        resultForTC.map(obj=>FinalResultForTC = Object.values(obj))
        reply.push(FinalResultForTSA)
        reply.push(FinalResultForStu)
        reply.push(FinalResultForTC)
        console.log("there was a hit ",reply)
    } catch (error) {
        console.log("error yahan h\n",error)
    }
    res.status(200).json(reply)
}
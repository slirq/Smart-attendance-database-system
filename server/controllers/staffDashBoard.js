const db = require("../connection")
exports.staffDashBoard=async (req,res)=>{
    let uniqueID = req.body.uniqueID
    let sqlForteacherInfo = `select NAME,SUBJECT from staff where ID='${uniqueID}';`
    let sqlForTC = `select * from totalclasses;`
    let sqlForFullTT = `select DAY,8_00,9_00,10_00,11_30,12_30,2_00,3_00,4_00 from timetable ORDER BY FIELD(DAY, 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');`

    let reply=[]
    let FinalResultForFullTT=[];
    let FinalResultForTeacherInfo;
    let FinalResultForTC;
    try {
        const [resultForTeacherInfo    ,fTSA] = await  db.execute(sqlForteacherInfo)
        const [resultForTC,fTC] = await  db.execute(sqlForTC)
        const [resultForTT,fStu] = await  db.execute(sqlForFullTT)

        resultForTeacherInfo.map(obj=>FinalResultForTeacherInfo = Object.values(obj))
        resultForTT.map(obj=>FinalResultForFullTT.push(Object.values(obj)))
        resultForTC.map(obj=>FinalResultForTC = Object.values(obj))
        
        reply.push(FinalResultForTeacherInfo)
        reply.push(FinalResultForFullTT)
        reply.push(FinalResultForTC)
        console.log(reply)
    } catch (error) {
        console.log("error yahan h\n",error)
    }
    res.status(200).json(reply)
}

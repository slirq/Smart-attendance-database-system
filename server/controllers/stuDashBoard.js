const db = require('../connection');
exports.stuDashBoard = async (req,res)=>{
    let usn = req.body.uniqueID
    let date = new Date()
    let day = date.toLocaleString('en-US',{weekday:'long'}).toLocaleUpperCase()
    let section 
    let sqlForTSA = `select ATCI,ME,CNS,ADP,UNIX,EVS,DBMS from totalstudentattendance where USN="${usn}" `
    let sqlForStu = `select USN,NAME,SECTION from student where USN = "${usn}"`
    let sqlForTC = `select ATCI,ME,CNS,ADP,UNIX,EVS,DBMS from totalclasses`
    
    let reply=[]
    // console.log("\n",usn ,"\n")
    let FinalResultForTSA;
    let FinalResultForStu;
    let FinalResultForTC;
    let FinalResultForTT
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

        section = reply[1][2]
        let sqlForTT = `select 8_00,9_00,10_00,11_30,12_30,2_00,3_00,4_00 from timetable where DAY="${day}" and section="${section}";`
        // console.log(sqlForTT)
        const [resultForTT,fTT] = await  db.execute(sqlForTT)
        resultForTT.map(obj=>FinalResultForTT = Object.values(obj))
        reply.push(FinalResultForTT)
        reply.push(day)
        console.log(reply)
    } catch (error) {
        console.log("error yahan h\n",error)
    }
    res.status(200).json(reply)
}
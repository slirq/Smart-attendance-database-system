const db = require("../connection")
const {extractValue,extractValueArray} = require("./helper")
exports.staffDashBoard=async (req,res)=>{
    let uniqueID = req.body.uniqueID
    let sqlForteacherName = `select NAME from staff where ID='${uniqueID}';`
    let sqlForTC = `select * from totalclasses;`
    let sqlForFullTT = `select DAY,8_00,9_00,10_00,11_30,12_30,2_00,3_00,4_00 from timetable ORDER BY FIELD(DAY, 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');`
    let sqlForSubjects = `select subject from subjects where ID='${uniqueID}';`
    let reply=[]
    try {
        const [resultForTeacherInfo    ,fTSA] = await  db.execute(sqlForteacherName)
        const [resultForTC,fTC] = await  db.execute(sqlForTC)
        const [resultForTT,fStu] = await  db.execute(sqlForFullTT)
        const [resultForSubjects,fSub] = await  db.execute(sqlForSubjects)
        let FinalResultForFullTT=extractValueArray(resultForTT  );
        let FinalResultForTeacherInfo= extractValue(resultForTeacherInfo);
        let FinalResultForTC= extractValue(resultForTC);
        let FinalResultForSub= extractValueArray(resultForSubjects);
        reply.push(FinalResultForTeacherInfo)
        reply.push(FinalResultForTC)
        for(let index=0;index < FinalResultForFullTT.length;index++){
            FinalResultForFullTT[index][0] = FinalResultForFullTT[index][0].substr(0,3)
        }
        reply.push(FinalResultForFullTT)
        reply.push(FinalResultForSub)

        console.log(reply)
    } catch (error) {
        console.log("error yahan h\n",error)
    }
    res.status(200).json(reply)
    }

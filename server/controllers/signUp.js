const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name.toUpperCase();
    let sec = req.body.sec.toUpperCase();
    let subject = req.body.subject
    let staff=req.body.staff

    try{ 
        if(staff) {
            let sqlForTeachers=`call signUpTeachers('${usn}','${name}','${password}','${sec}','${subject}');`
            const [resultTeachers,fieldTeac] = await db.execute(sqlForTeachers)
            console.log(resultTeachers)
            res.status(200).json({reply:resultTeachers.affectedRows===0})
        }
        else {
            let sqlForStudent = `call signUpStudents('${usn}','${name}','${sec}','${password}')`
            const [result,fields] = await db.execute(sqlForStudent)
            console.log(result.affectedRows)
            res.status(200).json({reply:result.affectedRows===0})
            }
        }
    
    catch(e){ console.log("\n\n\nt'was an error\n\n",e.sqlMessage,"\n\n",e);res.status(500).json({"reply":false})}
    
}

// prepare stmt from 'insert into staff values(?,?,(select SHA2(?,256)),?)';

// set @id = "BITstaff1";
// set @name = "TeacherA";
// set @password = "TeacherA";
// set @subject="ME";

// execute stmt using @id,@name,@password,@subject;
const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name;
    let sec = req.body.sec;
    let subject = req.body.subject
    let ID= req.body.id
    
    
    try{
        
        if(usn===0) {

            let sqlForStaff = 'insert into staff values(?,?,(select SHA2(?,256)),?);'
            let valuesForStaff = [`${ID}`,`${name}`,`${password}`,`${sec}`]
            const [result,fields] = await db.execute(sqlForStaff,valuesForStaff)

            console.log(result.affectedRows)
            console.log(newID,"from main")
            res.status(200).json(resForID)
        }
        else {
            let sqlForStudent = `insert into student values(?,?,?,(select SHA2(?,256)));`
            let valuesForStudent = [`${usn}`,`${name}`,`${sec}`,`${password}`]
            const [result,fields] = await db.execute(sqlForStudent,valuesForStudent)
            console.log(result.affectedRows)
            res.status(200).json({reply:result.affectedRows})
            }

        }
    
    catch(e){ console.log("t'was an error\n\n",e.sqlMessage,"\n\n",e)}
    
}

// prepare stmt from 'insert into staff values(?,?,(select SHA2(?,256)),?)';

// set @id = "BITstaff1";
// set @name = "TeacherA";
// set @password = "TeacherA";
// set @subject="ME";

// execute stmt using @id,@name,@password,@subject;
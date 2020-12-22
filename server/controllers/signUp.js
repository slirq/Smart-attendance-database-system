const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name.toUpperCase();
    let sec = req.body.sec.toUpperCase();
    let subject = req.body.subject
    let ID= req.body.id

    try{
        
        if(usn===0) {
            let reply = []
            let sqlForStaff = 'insert into staff values(?,?,(select SHA2(?,256)));'
            let sqlForSub = 'insert into subject values(?,?,?);'
            let valuesForSub = [`${ID}`,`${subject}`,`${sec}`]
            let valuesForStaff = [`${ID}`,`${name}`,`${password}`]
            const [resultSta,fieldst] = await db.execute(sqlForStaff,valuesForStaff)
            const [resultSub,fieldsu] = await db.execute(sqlForSub,valuesForSub)
            console.log(resultSub)
            res.status(200).json(resultSta.affectedRows)
        }
        else {
            let sqlForStudent = `insert into student values(?,?,?,(select SHA2(?,256)));`
            let valuesForStudent = [`${usn}`,`${name}`,`${sec}`,`${password}`]
            const [result,fields] = await db.execute(sqlForStudent,valuesForStudent)
            console.log(result.affectedRows)
            res.status(200).json({reply:result.affectedRows})
            }

        }
    
    catch(e){ console.log("t'was an error\n\n",e.sqlMessage,"\n\n",e);res.json({"error":e.errno})}
    
}

// prepare stmt from 'insert into staff values(?,?,(select SHA2(?,256)),?)';

// set @id = "BITstaff1";
// set @name = "TeacherA";
// set @password = "TeacherA";
// set @subject="ME";

// execute stmt using @id,@name,@password,@subject;
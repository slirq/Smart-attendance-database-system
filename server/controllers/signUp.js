const db = require('../connection');
exports.signUp = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.usn;
    let name = req.body.name;
    let sec = req.body.sec;
    let subject = req.body.subject
    let sqlForID= 'select ID from staff;'
    
    
    try{
        
        if(usn===0) {
            const [resForID,fID] = await db.execute(sqlForID)
            const newID =  createNewId(resForID)
            let sqlForStaff = 'insert into staff values(?,?,(select SHA2(?,256)),?);'
            let valuesForStaff = [`${newID}`,`${name}`,`${password}`,`${subject}`]
            const [result,fields] = await db.execute(sqlForStaff,valuesForStaff)
            console.log(valuesForStaff)
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


const createNewId=(resForID)=>{
    let lastEntry = resForID.length-1
    let lengthOFString = resForID[lastEntry].ID.length;
    let newID 
    if(lengthOFString>8){
        let numOfDigits = lengthOFString-8
        let num = resForID[lastEntry].ID[8]
        let digits = ""
        let index = 8
        for(let i = 0;i<numOfDigits;i++){
                digits+=resForID[lastEntry].ID[index]
                index++;
        }
        newID = "abc"+(Number(digits)+1)                
    }
    return newID;
}
// prepare stmt from 'insert into staff values(?,?,(select SHA2(?,256)),?)';

// set @id = "BITstaff1";
// set @name = "TeacherA";
// set @password = "TeacherA";
// set @subject="ME";

// execute stmt using @id,@name,@password,@subject;
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
            const [resForID,fID] = await db.execute(sqlForID)
            console.log("result field is ",resForID)
            const newID =  createNewId(resForID)
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


const createNewId=(resForID)=>{
    let lastEntry = resForID.length-1
    let lengthOFString = resForID[lastEntry].ID.length;
    let newID 
    if(lengthOFString>3){
        let numOfDigits = lengthOFString-3
        let num = resForID[lastEntry].ID[3]
        let index = 3
        let digits = resForID[lastEntry].ID[index]
        console.log(resForID[lastEntry].ID[index])
        for(let i = 0;i<numOfDigits;i++){
                digits+=resForID[lastEntry].ID[index]
                index++;
        }
        newID = "abc"+(Number(digits)+1)                
        console.log(newID)
    }
    return newID;
}
// prepare stmt from 'insert into staff values(?,?,(select SHA2(?,256)),?)';

// set @id = "BITstaff1";
// set @name = "TeacherA";
// set @password = "TeacherA";
// set @subject="ME";

// execute stmt using @id,@name,@password,@subject;
const db = require('../connection');
exports.signIn = async (req,res)=>{
    let password = req.body.password;
    let usn = req.body.uniqueID;
    let staff = req.body.staff
    let sqlForStudents = ` (select SHA2('${password}',256) like (select password from student where usn='${usn}'));`
    let sqlForStaff = ` (select SHA2('${password}',256) like (select PASSWORD from staff where ID='${usn}'));`
    // console.log(password);
    if(staff){
    const [resultForStaff,fields] = await db.execute(sqlForStaff)
    let finalRes
    resultForStaff.map(obj=>finalRes=Object.values(obj)[0])
    console.log(resultForStaff[0].BinaryRow,staff)
    res.send({reply:finalRes})
    }
    else{
        const [resultForStudent,fields] = await db.execute(sqlForStudents)
        let finalRes
        resultForStudent.map(obj=>finalRes=Object.values(obj)[0])
        console.log(finalRes)
        res.send({reply:finalRes})
    }
}

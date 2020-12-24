const db = require('../connection');
const {extractValueArray} = require("./helper");
exports.getTT=async (req,res)=>{
let section = req.body.section
let reply =[]
try {
    let sqlFortt = `select DAY,8_00,9_00,10_00,11_30,12_30,2_00,3_00,4_00 from schedule where SECTION="${section}" ORDER BY FIELD(DAY, 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');` 
    const [result,f] = await db.execute(sqlFortt)
    reply = extractValueArray(result)
    for(let index=0;index < reply.length;index++){
        reply[index][0] = reply[index][0].substr(0,3)
    }
    console.log(reply)
    res.json(reply)
} catch (error) {
    console.log("\n\n\n error is here \n\n\n",error)
    res.status(500)
}
}
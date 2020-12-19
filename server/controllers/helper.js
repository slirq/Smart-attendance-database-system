const extractValue=(result)=>{
    let final
    console.log(result.affectedRows)
    result.map((obj)=>final = Object.values(obj))
    return final;
}
const extractValueArray=(result)=>{
    let final =[]
    result.map((obj)=>final.push(Object.values(obj)))
    return final;
    }
 
module.exports.extractValue = extractValue
module.exports.extractValueArray = extractValueArray
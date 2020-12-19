import React,{useState,useRef} from 'react'
import {Box,Text} from 'rebass'
import {useFormik} from 'formik'
import axios from 'axios'
export default function ClassesUpdate({subjects,uniqueID}) {
    let dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    let months = [1,2,3,4,5,6,7,8,9,10,11,12]
    let years = [2020,2021,2022]
    const [toggle, setToggle] = useState(false)
    const [serverReply,setReply] = useState(false)
    let payload,reply
    let msg = useRef(null)
    // let dbInform = useRef(null)
    const showStatement=()=>{
        let {section,date,month,year,numberOfClasses,subject} = formik.values
        payload = `${numberOfClasses} class(es) of ${subject} were conducted on ${date}-${month}-${year} for section ${section}`
        msg.textContent = payload
        
    }
    const validate=values=>{
        const errors={}
        // console.log(values)
        if(!values.date.length){errors.date = "choose a date sweety"}
        if(!values.month.length){errors.month = "choose a month sweety"}
        return errors
    }
    const formik = useFormik({
        initialValues:{
            section:"A",
            numberOfClasses:"1",
            subject:`${subjects[0]}`,
            date:"",
            month:"",
            year:"2020"
        },
        validate,
        onSubmit:async val=>{
            let {section,date,month,year,numberOfClasses,subject} = val
            payload = `${numberOfClasses} class(es) of ${subject} were conducted on ${date}-${month}-${year} for section ${section}`
            // console.log(JSON.stringify(payload))
            // console.log(formik.errors)
            try {
                reply = await axios({method:'post',url:'http://localhost:5000/classLog', data:{
                    uniqueID: `${uniqueID}`,
                    log:payload } })
                setReply(reply.data.result)
            } catch (error) {
                console.log(error)
            }
        }
    })
    const makeVisible=(e)=>{setToggle(!toggle)}
    return (
       <Box sx={{display:"flex",
                width:"auto",
                background: 'rgba(0, 0, 0, 0.8 )',
                borderRadius:"2em",
                margin:'2vh',
                marginY:'0.2vh',
                flexDirection:"row",
                fontFamily:"Sansita Swashed",
                fontSize:"1.5em"}}>
            <div style={{color:"blue",width:"100vw",height:toggle?"120vh":"10vh"}}>
                <span className = {toggle?"show":"hidden"} style={{width:"100vw",display:"flex",justifyContent:"center"}}>
                    Update Classes
                </span> 
                <img alt="dropdown" className="dropdownButton" src="https://img.icons8.com/nolan/64/drag-list-down.png" onClick={makeVisible}/>
                <Box className = {toggle?"show":"calendar"} sx={{width:"50vw",position:'relative',left:"10vh"}}>
                    <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="section">Which setion was it?</label>
                    <select id="setion" name="section" 
                        value={formik.values.section}
                        onChange={formik.handleChange}
                        onClick={showStatement} >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    <label htmlFor="dateTaken">when was the class taken?</label>
                    <select id="date" 
                            name="date" 
                            onChange={formik.handleChange}
                            onClick={showStatement}
                            value={formik.values.date}>
                            {dates.map(date=><option id="date" name="date" value={date}>{date}</option>)}
                    </select>
                    { formik.errors.date?
                            <Text sx={{fontSize:"1.6em",color:"red"}}>
                                {formik.errors.date}
                            </Text>:null}
                    <select id="month" name="month" 
                            onChange={formik.handleChange}
                            onClick={showStatement}
                            value={formik.values.month}>
                            {months.map(month=><option id="month" name="month" value={month}>{month}</option>)}
                    </select>
                    { formik.errors.month?
                            <Text sx={{fontSize:"1.6em",color:"red"}}>
                                {formik.errors.month}
                            </Text>:null}
                    <select id="year" 
                            name="year" 
                            onChange={formik.handleChange}
                            onClick={showStatement}
                            value={formik.values.year}>
                            {years.map(year=><option id="year" name="year" value={year}>{year}</option>)}
                    </select>
                    <label htmlFor="numberOfClasses">number of classes that happend that day?</label>
                    <select id="numberOfClasses" 
                            onChange={formik.handleChange} 
                            name="numberOfClasses"
                            onClick={showStatement} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <label htmlFor="subject">what was the subject?</label>
                    <select id="subject" name="subject" 
                        value={formik.values.subject} onClick={showStatement}
                        onChange={formik.handleChange}>
                        {subjects.map(sub=><option value={`${sub}`}>{`${sub}`}</option>)}
                    </select>
                    <Text ref={el=>msg=el} sx={{fontSize:"1.6em",color:"red"}} ></Text>
                    <button type="submit">Submit?</button>
                    {serverReply?<Text >Database successfully updated</Text>:<Text></Text>}
                    </form>
                </Box> 
            </div>
       </Box>
    )
}

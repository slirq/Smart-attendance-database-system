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
    // const validate=values=>{
    //     const errors={}
    //     // console.log(values)
    //     if(!values.date.length){errors.date = "choose a date sweety"}
    //     if(!values.month.length){errors.month = "choose a month sweety"}
    //     return errors
    // }
    const formik = useFormik({
        initialValues:{
            section:"A",
            numberOfClasses:"1",
            subject:`${subjects[0]}`,
            date:"10",
            month:"12",
            year:"2020"
        },
        onSubmit:async val=>{
            let {section,date,month,year,numberOfClasses,subject} = val
            payload = `${numberOfClasses} class(es) of ${subject} were conducted on ${date}-${month}-${year} for section ${section}`
            // console.log(JSON.stringify(payload))
            // console.log(formik.errors)
            try {
                reply = await axios({method:'post',url:'http://localhost:5000/classLog', data:{
                    uniqueID: `${uniqueID}`,
                    log:payload,
                    days:numberOfClasses,
                    subject:subject,
                    section:section
                } })
                setReply(reply.data.result)
            } catch (error) {
                console.log(error)
            }
        }
    })
    const makeVisible=(e)=>{setToggle(!toggle)}
    return (
       <div className="Card" >
            <div display='flex'  style={{color:"white",height:toggle?"60vh":"10vh"}}>
           
            <img alt="dropdown"  className="dropdownButton" src="https://img.icons8.com/nolan/64/drag-list-down.png" onClick={makeVisible}/>
            <label  style={{fontSize:"6vh",color:'aqua'  }}>Update Classes</label>
            

                <div className = {toggle?"show":"calendar"} style={{width:"50vw",position:'relative',left:"10vh",top:'5vh'}}>
                    <form  onSubmit={formik.handleSubmit} >
                        <label htmlFor="section">Which section was it?</label>
                        <select id="setion" name="section" 
                            value={formik.values.section}
                            onChange={formik.handleChange}
                            onClick={showStatement} >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                        <div style={{display:"flex",flexDirection:"row"}}>
                        <label htmlFor="date">when was the class taken?</label>
                        
                        <select id="date" 
                                margin='0'
                                name="date" 
                                onChange={formik.handleChange}
                                onClick={showStatement}
                                value={formik.values.date}>
                                {dates.map((date,index)=><option id="date" name="date" key={date}>{date}</option>)}
                        </select>
                        
                        { formik.errors.date?
                                <Text sx={{fontSize:"1.6em",color:"red"}}>
                                    {formik.errors.date}
                                </Text>:<Text></Text>}
                        <select id="month" name="month" 
                                onChange={formik.handleChange}
                                onClick={showStatement}
                                value={formik.values.month}>
                                {months.map(month=><option id="month" name="month" key={month}>{month}</option>)}
                        </select>
                        { formik.errors.month?
                                <Text sx={{fontSize:"1.5em",color:"red"}}>
                                    {formik.errors.month}
                                </Text>:<Text></Text>}
                        <select id="year" 
                                name="year" 
                                onChange={formik.handleChange}
                                onClick={showStatement}
                                value={formik.values.year}>
                                {years.map(year=><option id="year" name="year" key={year}>{year}</option>)}
                        </select>
                        </div>
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
                            value={formik.values.subject} 
                            onClick={showStatement}
                            onChange={formik.handleChange}>
                            {subjects.map((sub,index)=><option key={`cu-1-${index}`} value={`${sub}`}>{`${sub}`}</option>)}
                        </select>
                        <h2 ref={el=>msg=el} style={{fontSize:"1.5em",color:"yellow"}} >
                            {`${formik.values.numberOfClasses} class(es) of ${formik.values.subject} were conducted on ${formik.values.date}-${formik.values.month}-${formik.values.year} for section ${formik.values.section}`}
                        </h2>
                        <button className="cu-but" type="submit">Submit?</button>
                        {serverReply?<Text sx={{color:"rgb(240, 178, 33)"}} >Database successfully updated</Text>:<Text></Text>}
                    </form>
                    
                </div> 
                </div>
            
       </div>
    )
}

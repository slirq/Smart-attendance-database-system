import React,{useState,useRef} from 'react'
import {Box,Text} from 'rebass'
import {useFormik} from 'formik';
export default function ClassesUpdate({subjects}) {
    let dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    let months = [1,2,3,4,5,6,7,8,9,10,11,12]
    let years = [2020,2021,2022]
    let payload
    let msg = useRef(null)
    const showStatement=()=>{
        let {section,date,month,year,numberOfClasses,subject} = formik.values
        payload = `${numberOfClasses} class(es) of ${subject} were conducted on ${date}-${month}-${year} for section ${section}`
        msg.textContent = payload
    }
    const validate=values=>{
        const errors={}
        if(!values.date){errors.date = "choose a date sweety"}
        if(!values.month){errors.month = "choose a month sweety"}
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
        onSubmit: val=>{
            let {section,date,month,year,numberOfClasses,subject} = val
            payload = `${numberOfClasses} class(es) of ${subject} were conducted on ${date}-${month}-${year} for section ${section}`
            console.log(JSON.stringify(payload))
        }
    })
    const [toggle, setToggle] = useState(false)
    // console.log(value)
    // const onClickDay = (value,event)=>{console.log(value)}
    const makeVisible=(e)=>{setToggle(!toggle)}
    return (
       <Box sx={{display:"flex",width:"auto",background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em", margin:'2vh',marginY:'0.2vh',
       flexDirection:"row"}}>
            <div style={{color:"red",width:"100vw",height:toggle?"90vh":"10vh"}}>
                <span className = {toggle?"show":"hidden"} style={{width:"100vw",display:"flex",justifyContent:"center"}}>
                    Update Classes
                </span> 
                <img alt="dropdown" className="dropdownButton" src="https://img.icons8.com/nolan/64/drag-list-down.png" onClick={makeVisible}/>
                <Box className = {toggle?"show":"calendar"} sx={{width:"50vw",position:'relative',left:"10vh"}}>
                    <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="section">Which setion was it?</label>
                    <select id="setion" name="section" 
                        value={formik.values.section}
                        onChange={formik.handleChange}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    {/* {formik.errors.section ? <div>{formik.errors.section}</div> : null} */}
                    <label htmlFor="dateTaken">when was the class taken?</label>
                    <select id="date" name="date" onClick={formik.handleChange}
                            value={formik.values.date}>
                            {dates.map(date=><option id="date" name="date" value={date}>{date}</option>)}
                    </select>
                    <select id="month" name="month" onClick={formik.handleChange}
                            value={formik.values.month}>
                            {months.map(month=><option id="month" name="month" value={month}>{month}</option>)}
                    </select>
                    <select id="year" name="year" onClick={formik.handleChange}
                            value={formik.values.year}>
                            {years.map(year=><option id="year" name="year" value={year}>{year}</option>)}
                    </select>
                    {formik.errors.dateTaken?<div>{formik.errors.dateTaken}</div>:null}
                    <label htmlFor="numberOfClasses">number of classes that happend that day?</label>
                    <select id="numberOfClasses" onChange={formik.handleChange} name="numberOfClasses" value={formik.values.numberOfClasses}>
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
                    <Text ref={el=>msg=el} ></Text>
                    <button type="submit">Submit?</button>
                    </form>
                </Box> 
            </div>
       </Box>
    )
}

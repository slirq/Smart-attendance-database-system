import React,{useState} from 'react'
import Table from './Table'
import axios from 'axios'
import {useFormik} from 'formik'
export default function AttendanceView({subjects,sections}) {
    const [serverReply, setserverReply] = useState([])
    const formik = useFormik({
        initialValues:{
            subjectAV:`${subjects[0]}`,
            sectionAV:`${sections[0]}`
        },
        onSubmit:async val=>{
            let {subjectAV,sectionAV} = val
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/attendanceView",
                "data":{
                    "subject":subjectAV,
                "section":sectionAV}})
            // console.log("reply from av",reply) 
            setserverReply(reply.data)

        }
    })


    const makePercentage=(item)=>item.ATT.substr(0,item.ATT.indexOf('/'))==='0'?'0%':((Number(item.ATT.substr(0,item.ATT.indexOf('/')))/Number(item.ATT.substr(item.ATT.indexOf('/')+1)))*100).toFixed(2).concat('%')

    return (
                                      
        <div className="Card">
                <h2 >
                    ATTENDANCE
                </h2>
                <form onSubmit={formik.handleSubmit}>
                <div style={{display:"flex"}}>
                <label htmlFor="subjectAV">{`Showing attendance of students for subject   `}</label>
                <select className="subjectAV" id="subjectAV" name="subjectAV" onChange={formik.handleChange}  >
                    {subjects.map((sub,index)=>{return(<option 
                                                        key={`${sub}+${index}`} 
                                                        value={`${sub}`}
                                                        >{`${sub}`}</option>)})}
                </select>
                <label htmlFor="section">and section </label>
                <select className="sectionAV" id="sectionAV" name="sectionAV" onChange={formik.handleChange} >
                    {sections.map((sec,index)=>{return(<option 
                                                        key={`${sec}+${index}`} 
                                                        value={`${sec}`}
                                                        >{`${sec}`}</option>)})}
                </select>
                </div>
                    <button style={{width:"15vw"}} type="submit">Get that summary</button>
                <Table  columns={3} data={["USN","Attendance",'percentage']} uniStr="av-1-"/>
                {serverReply.map((item,index)=><Table columns={3} key={`av-3-${index}`} data={[ item.USN,item.ATT, makePercentage(item)
                ]} 
                    uniStr="av-2-"/>)}
                </form>
        </div> 
    )
}

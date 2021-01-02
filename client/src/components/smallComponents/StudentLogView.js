import React,{useState} from 'react'
import axios from 'axios'
import {Flex} from 'rebass'
import {useFormik } from 'formik'
import Table from './Table'
export default function LogView({subjects,sections}) {
    const [serverReply, setserverReply] = useState([])
    const validate = ()=>{
    let errors={}   
     return errors}
    const formik = useFormik({
        initialValues:{
            subjectLV:`${subjects[0]}`,
            sectionLV:`${sections[0]}`
        },validate,
        onSubmit: async val=>{
            let {subjectLV,sectionLV }= val
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/studentLogView",
                "data":{"subject":subjectLV,"section":sectionLV,}})
            setserverReply(reply.data)
        }
    })
    return (
        <div className="Card" >
             <h2 style={{fontSize:'6vh'}} className="hd">
            Student Log
            </h2>          
                <form onSubmit={formik.handleSubmit}>
                <Flex>
                <label style={{paddingRight:".2em"}} htmlFor="subjectLV">{`Showing attendance log for subject`}</label>
                    <select id="subjectLV" name="subjectLV" onChange={formik.handleChange} style={{marginTop:".4em"}} >
                        {subjects.map((sub,index)=>{return(<option 
                                                            key={`${sub}+${index}`} 
                                                            value={`${sub}`}
                                                            >{`${sub}`}</option>)})}
                    </select>
                    
                    <label style={{paddingRight:".2em"}} htmlFor="sectionLV">and section </label>
                    <select id="sectionLV" name="sectionLV" onChange={formik.handleChange}  style={{marginTop:".4em"}}>
                        {sections.map((sec,index)=>{return(<option 
                                                            key={`${sec}+${index}`} 
                                                            value={`${sec}`}
                                                            >{`${sec}`}</option>)})}
                    </select>
                    </Flex>                  
                    <button style={{width:"auto",height:'auto'}} type="submit">Get that log</button>
                </form>
            
            <Table  columns={2} data={["USN","Timestamp"]} uniStr="lv-1-"/>
            {serverReply.map((item,index)=><Table columns={2} key={`lv-2-${index}`} data={[ item.USN,item.TS.replace("T","\t|\t").replace(".000Z","")]} uniStr="lv-2-"/>)}      
    </div>
    )
}

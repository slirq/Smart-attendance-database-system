import React,{useState} from 'react'
import axios from 'axios'
import { Text,Box,Heading, Flex} from 'rebass'
import {useFormik } from 'formik'
import Table from './Table'
export default function LogView({subjects,sections}) {
    const [serverReply, setserverReply] = useState([])
    const validate = ()=>{
    let errors={}
    // console.log(errors)
     return errors}
    const formik = useFormik({
        initialValues:{
            subjectLV:`${subjects[0]}`,
            sectionLV:`${sections[0]}`


        },validate,
        onSubmit: async val=>{
            // console.log(val)
            let {subjectLV,sectionLV }= val
            // console.log(sectionLV)
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/studentLogView",
                "data":{"subject":subjectLV,"section":sectionLV,}})
            // console.log(subject) 
            setserverReply(reply.data)
            // console.log(serverReply)
        }
    })
    return (
        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",margin:'1vh',
        marginTop:'0.1vh' }}>
            <Heading p={3} bg='muted'>
            <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]} fontWeight={"bold"} fontFamily={"Sansita Swashed"}
             sx={{width:"100vw",display:"flex",justifyContent:"center"}}   marginRight={".2em"} color={"White"}>
                Student log
            </Text>                
                <form onSubmit={formik.handleSubmit}>
                <Flex>
                <label htmlFor="subjectLV">{`Showing attendance log for subject   `}</label>
                    <select id="subjectLV" name="subjectLV" onChange={formik.handleChange}  >
                        {subjects.map((sub,index)=>{return(<option 
                                                            key={`${sub}+${index}`} 
                                                            value={`${sub}`}
                                                            >{`${sub}`}</option>)})}
                    </select>
                    <label htmlFor="sectionLV">and section </label>
                    <select id="sectionLV" name="sectionLV" onChange={formik.handleChange}  >
                        {sections.map((sec,index)=>{return(<option 
                                                            key={`${sec}+${index}`} 
                                                            value={`${sec}`}
                                                            >{`${sec}`}</option>)})}
                    </select>
                    </Flex>
                    
                    <button type="submit">Get that log</button>
                </form>
            
            <Table  columns={2} data={["USN","Timestamp"]} uniStr="lv-1-"/>
            {serverReply.map((item,index)=><Table columns={2} key={`lv-2-${index}`} data={[ item.USN,item.TS.replace("T","\t|\t").replace(".000Z","")]} uniStr="lv-2-"/>)}
            </Heading>
    </Box>
    )
}
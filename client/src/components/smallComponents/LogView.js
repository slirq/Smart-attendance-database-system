import React,{useState} from 'react'
import axios from 'axios'
import { Text,Box,Heading, Flex} from 'rebass'
import {useFormik } from 'formik'
import Table from './Table'
export default function LogView({subjects}) {
    const [serverReply, setserverReply] = useState([])
    const validate = ()=>{
    let errors={}
    // console.log(errors)
     return errors}
    const formik = useFormik({
        initialValues:{
            subjectLV:`${subjects[0]}`
        },validate,
        onSubmit: async val=>{
            // console.log(val)
            let {subjectLV }= val
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/logView",
                "data":{
                    "subject":subjectLV}})
            // console.log(subject) 
            setserverReply(reply.data)
            // console.log(serverReply)
        }
    })
    return (
        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",margin:'2vh',
        marginTop:'0.1vh' }}>
            <Heading p={3} bg='muted'>
            <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]} fontWeight={"bold"}
                marginRight={".2em"} color={"White"}>
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
                    </Flex>
                    <button type="submit">Get that log</button>
                </form>
            
            <Table  columns={2} data={["USN","Timestamp"]} uniStr="lv-1-"/>
            {serverReply.map((item,index)=><Table columns={2} key={`lv-2-${index}`} data={[ item.USN,item.TS]} uniStr="lv-2-"/>)}
            </Heading>
    </Box>
    )
}

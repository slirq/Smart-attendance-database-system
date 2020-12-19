import React,{useState} from 'react'
import axios from 'axios'
import { Text,Box,Heading} from 'rebass'
import {useFormik } from 'formik'
import Table from './Table'
export default function LogView({subjects}) {
    const [serverReply, setserverReply] = useState([])
    const formik = useFormik({
        initialValues:{
            subject:`${subjects[0]}`
        },
        onSubmit: async val=>{
            let {section }= val
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/logView",
                "data":{
                    "section":section}})
            setserverReply(reply)
            console.log(serverReply)
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
            <Text paddingBottom='2vh' htmlFor='name'  display='flex' flex-wrap= 'wrap'
                fontSize={[ 3, 4, 5 ]} fontWeight={"bold"}  marginRight={".2em"} color={"White"}>
                {`Showing attendance log for subject   `}
                <form onSubmit={handleSubmit}>
                    <select id="lv" defaultValue="">
                        {subjects.map((sub,index)=><option key={`${sub}+${index}`} >{`${sub}`}</option>)}
                    </select>
                    <button type="submit">Get that log</button>
                </form>
            </Text>
            <Table  columns={3} data={["USN","Subject","Timestamp"]}/>
            <Table columns={3}  data={[ "1BI18Cxxx","UNIX","00:00:00 16/4/2020",]}/>
            </Heading>
    </Box>
    )
}

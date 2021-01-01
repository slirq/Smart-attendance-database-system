import React,{useState} from 'react'
import axios from 'axios'
import { Text,Box,Heading} from 'rebass'

import Table from './Table'
export default function ClassLogView({Tid}) {
    const [serverReply, setserverReply] = useState([])
    
     const   GetInfo= async (e)=>{
            // console.log(val)
            
            // console.log(sectionLV)
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/classLogView",
                "data":{"Tid":Tid}})
                console.log("HUI")
            
            setserverReply(reply.data)
             console.log(serverReply)
        }
    
    return (
        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"1.2em",margin:'1vh',
        marginTop:'0.2vh' }}>
            <Heading p={3} bg='muted'>
            <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]} fontWeight={"bold"} fontFamily={"Sansita Swashed"}
             sx={{width:"100vw"}}   marginRight={".2em"} color={"White"}>
                Class log
            </Text>
            <button type="submit"  onClick={GetInfo}  >Get that log</button>       
        
                
            <Table  columns={1} data={["LOG"]} uniStr="lv-1-"/>
            {serverReply.map((item,index)=><Table columns={1} key={`lv-2-${index}`} data={[item.log]} uniStr="lv-2-"/>)}
            </Heading>
    </Box>
    )
}

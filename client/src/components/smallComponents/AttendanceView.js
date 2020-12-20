import React,{useState} from 'react'
import {Heading,Text,Box,Flex} from 'rebass'
import Table from './Table'
import axios from 'axios'
import {useFormik} from 'formik'
export default function AttendanceView({subjects,section}) {
    const [serverReply, setserverReply] = useState([])

    const formik = useFormik({
        initialValues:{
            subjectAV:`${subjects[0]}`
        },
        onSubmit:async val=>{
            let {subjectAV} = val
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/attendanceView",
                "data":{
                    "subject":subjectAV,
                "section":section}})
            // console.log("reply from av",reply) 
            setserverReply(reply.data)

        }
    })
    return (
                                      
        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",
                margin:'2vh',marginY:'0.2vh' }}>
            <Heading p={3} bg='muted'>
                <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]}
                    fontWeight={"bold"} marginRight={".2em"}color={"White"}>
                    ATTENDANCE
                </Text>
                <form onSubmit={formik.handleSubmit}>
                <Flex>
                <label htmlFor="subject">{`Showing attendance of students for subject   `}</label>
                    <select className="subject-av" id="subject" name="subject" onChange={formik.handleChange}  >
                        {subjects.map((sub,index)=>{return(<option 
                                                            key={`${sub}+${index}`} 
                                                            value={`${sub}`}
                                                            >{`${sub}`}</option>)})}
                    </select>
                <label htmlFor="section">{` and section ${section}`}</label>

                    </Flex>
                    <button type="submit">Get that summary</button>
                <Table  columns={2} data={["USN","Attendance"]} uniStr="av-1-"/>
                {serverReply.map((item,index)=><Table columns={2} key={`av-3-${index}`} data={[ item.USN,item.ATT]} uniStr="av-2-"/>)}
                </form>
            </Heading>
        </Box>
    )
}

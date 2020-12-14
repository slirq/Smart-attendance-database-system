import React,{useEffect,useReducer,useContext} from 'react'
import axios from 'axios'
import {MyContext }from '../context/context'
// import {Input} from '@rebass/forms'
import Table from './smallComponents/Table'
import { Text,Box,Card,Heading} from 'rebass'
import FullTimetable from './smallComponents/FullTimetable'
import ClassesUpdate from './smallComponents/ClassesUpdate'
import Name from './smallComponents/Name'
const initialState={
    loading:true,
    error:'',
    responseFromServer:[]
}
const reducer =(state,action)=>{
    // console.log(action.payload,"action type is ")
    switch(action.type){
        case "fetched":
            return {
                loading:false,
                error:'',
                responseFromServer:action.payload
            }
        case "notFetched":
            return {
                loading:false,
                error:"something went wrong",
                responseFromServer:[]
            }
        default:return state
    }
}


export default function StaffDashBoard() {
    const {uniqueID} = useContext(MyContext)
    const [state,dispatch]=useReducer(reducer,initialState)
    const fetchData = async ()=>{
        const result= await axios({"method":"post","url":"http://localhost:5000/getStaffInfo",
        "data":{uniqueID:uniqueID,
                firstTime:true }})
        return result.data 
        }
    console.log(state)
    useEffect(() => {
    (
        async()=>{
            let reply = await fetchData()
            dispatch({type:"fetched",payload:reply})

    })();
    // eslint-disable-next-line
    },[])

    return(state.loading?<Text sx={{
        height:"100%",
        width:"100%",
        background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",
        color: 'white',
        bg: 'gray',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>"LOADING"</Text>
    :
        <Box sx={{
            height:"100%",
            width:"100%",
            background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",
            color: 'white',
            bg: 'gray',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }} >
        <Card sx={{ position:"relative",   width:"90%", height:"wrap-content", background:"rgba(131,22,219,0.8)",
                        boxShadow:'0 0 2em rgba(0, 0, 0, .7)',  borderRadius:"2em", display:"top",
                        marginY:'2vh'
                }}>
                <Name name ={state.responseFromServer[0][0]}/>
                <ClassesUpdate/>
                <FullTimetable tt={state.responseFromServer[2]} />
                                      
                <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",
                                margin:'2vh',marginY:'0.2vh' }}>
                    <Heading p={3} bg='muted'>
                        <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]}
                            fontWeight={"bold"} marginRight={".2em"}color={"White"}>
                            ATTENDANCE
                        </Text>
                        <Text paddingBottom='2vh' htmlFor='name' display='flex'  flex-wrap= 'wrap'
                            fontSize={[ 3, 4, 5 ]} fontWeight={"bold"} marginRight={".2em"} color={"White"}>
                            Section Placeholder
                        </Text>
                        <Table  columns={2} data={["USN","Subject"]}/>
                        <Table  columns={2} data={["1Bi18cs003","26/30"]}/>
                    </Heading>
                </Box>
                <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",margin:'2vh',
                                marginTop:'0.1vh' }}>
                    <Heading p={3} bg='muted'>
                        <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]} fontWeight={"bold"}
                              marginRight={".2em"} color={"White"}>
                            Student log/Class Log
                        </Text>
                        <Text paddingBottom='2vh' htmlFor='name'  display='flex' flex-wrap= 'wrap'
                              fontSize={[ 3, 4, 5 ]} fontWeight={"bold"}  marginRight={".2em"} color={"White"}>
                            select student placeholder
                        </Text>
                        <Text paddingBottom='2vh' htmlFor='name' display='flex' flex-wrap= 'wrap'  fontSize={[ 3, 4, 5 ]}
                              fontWeight={"bold"} marginRight={".2em"} color={"White"}>
                            select timeframe placeholder {/*default should be all students*/}
                        </Text>
                        <Table  columns={3} data={["USN","Subject","Timestamp"]}/>
                        <Table columns={3}  data={[ "1BI18Cxxx","UNIX","00:00:00 16/4/2020",]}/>
                    </Heading>
                </Box>
            </Card>
        </Box>
    )
}
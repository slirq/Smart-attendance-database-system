import React,{useEffect,useReducer,useContext} from 'react'
import axios from 'axios'
import {MyContext }from '../context/context'
// import {Input} from '@rebass/forms'
// import Table from './smallComponents/Table'
import { Text,Box,Card} from 'rebass'
import FullTimetable from './smallComponents/FullTimetable'
import ClassesUpdate from './smallComponents/ClassesUpdate'
import Name from './smallComponents/Name'
import AttendanceView from './smallComponents/AttendanceView'
import LogView from './smallComponents/LogView'
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
        }})
        return result.data 
        }
    // console.log(state)
    useEffect(() => {
    (
        async()=>{
            let reply = await fetchData()
            dispatch({type:"fetched",payload:reply})
        // console.log(state.responseFromServer)


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
                        marginY:'2vh'}}>
                <Name name ={state.responseFromServer[0][0]}/>
                <ClassesUpdate subjects={state.responseFromServer[3]} uniqueID={uniqueID}/>
                <FullTimetable tt={state.responseFromServer[2]} />
                <AttendanceView subjects={state.responseFromServer[3]} section={state.responseFromServer[1][0]} />                
                <LogView subjects={state.responseFromServer[3]}  />
            </Card>
        </Box>
    )
}
import React,{useEffect,useReducer,useContext} from 'react'
import axios from 'axios'
import {MyContext }from '../context/context'
// import {Input} from '@rebass/forms'
// import Table from './smallComponents/Table'
import { Text,Box,Card,Heading,Flex} from 'rebass'
import FullTimetable from './smallComponents/FullTimetable'
import ClassesUpdate from './smallComponents/ClassesUpdate'
import Name from './smallComponents/Name'
import AttendanceView from './smallComponents/AttendanceView'
import StudentLogView from './smallComponents/StudentLogView'
const initialState={
    loading:true,
    error:'',
    tt:[],
    subjects:[],
    name:""
}
const reducer =(state,action)=>{
    console.log("action type is ",action.payload,"\n and state is ",state)
    switch(action.type){
        case "initialFetch":
            return {
                loading:false,
                tt:action.payload.tt,
                subjects:action.payload.subjects,
                name:action.payload.name,
                error:""}
                case "ttChange":return{...state, tt:action.payload}
                case "notFetched":return {...state,error:"something went wrong"}
                default:{
                    return state
                }
            }
        }
export default function StaffDashBoard() {
    const {uniqueID} = useContext(MyContext)
    const [state,dispatch]=useReducer(reducer,initialState)
    const sections =["A","B","C"]
    const fetchData = async ()=>{
        const result= await axios({"method":"post","url":"http://localhost:5000/getStaffInfo",
        "data":{uniqueID:uniqueID}})
        return result.data 
        }
    // console.log(state)
    useEffect(() => {
    (
        async()=>{
            let reply = await fetchData()
            dispatch({type:"initialFetch",payload:{tt:reply[2],subjects:reply[3],name:reply[0][0]}})

    })();
    // eslint-disable-next-line
    },[])
    const handleSectionChange = async (e)=>{
            console.log(e.target.value)
            let newSection = e.target.value
            let newTT = await axios({
                "method":"post",
                "url":"http://localhost:5000/getTT",
                "data":{section:`${newSection}`}
            })
            dispatch({type:"ttChange",payload:newTT.data})
            
    }
    return(state.loading?<Text sx={{
        height:"100%",
        width:"100%",
        background:"linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
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
            background:"linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",

            color: 'white',
            bg: 'gray',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }} >
        <Card sx={{ position:"relative",   width:"90%", height:"wrap-content", background:"white",
                        boxShadow:'0 0 2em rgba(0, 0, 0, .7)',  borderRadius:"2em", display:"top",
                        marginY:'2vh'}}>
                <Name name ={state.name}/>
                <ClassesUpdate subjects={state.subjects} uniqueID={uniqueID}/>
                <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"1.2em",margin:'1vh',marginY:'0.2vh'}}>
                        
                <Heading p={3} bg='muted'>
                    <Box>
                        <Text paddingBottom='2vh' htmlFor='name'  fontSize={[ 3, 4, 6 ]} fontWeight={"bold"} 
                            fontFamily={"Sansita Swashed"} marginRight={".2em"}  color={"White"} sx={{width:"100vw"}}>
                                Time Table
                        </Text>
                        <Flex sx={{justifyContent:'center'}}>SECTION
                        <select onChange={handleSectionChange}>
                            {sections.map((item,index)=><option key={`sta-DaBo-0-${index}`} value={`${item}`}>{item}</option>)}
                        </select>
                        </Flex>  
                    </Box>
                    <FullTimetable tt={state.tt} newTT={false} />
                </Heading> 
                </Box>
                <AttendanceView subjects={state.subjects} sections={sections} />                
                <StudentLogView subjects={state.subjects} sections={sections}  />
            </Card>
        </Box>
    )
}
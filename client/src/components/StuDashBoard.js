import React, { useEffect,useContext, useReducer } from 'react'
import {Text,Box,Card,Heading} from 'rebass'
import {MyContext }from '../context/context'
import Table from './smallComponents/Table'
import axios from 'axios'
import PieChartTable from './smallComponents/PieCharts'
import FullTimetable from './smallComponents/FullTimetable'

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

export default function StuDashBoard() {    
    const {uniqueID} = useContext(MyContext)
    const [state,dispatch]=useReducer(reducer,initialState)
    let subjects = [ "ATCI","ME","CNS","ADP","UNIX","EVS","DBMS"]
    const fetchData = async ()=>{
            const result= await axios({"method":"post","url":"http://localhost:5000/getAttendance","data":{uniqueID:uniqueID }})
            return result.data 
            }
    useEffect(() => {
        (
            async()=>{
                let reply = await fetchData()
                dispatch({type:"fetched",payload:reply})

        })();
        // eslint-disable-next-line
    },[])

    return(state.loading?"Loading":(
        <Box sx={{
            height:"100%",
            width:"100%",
            background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",
            color: 'white',
            bg: 'gray',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        } }>
                
            <Card

                    sx={{
                        position:"relative",
                        width:"90%",
                        height:"wrap-content",
                        background:"rgba(131,22,219,0.8)",
                        boxShadow:'0 0 2em rgba(0, 0, 0, .7)',
                        borderRadius:"2em",
                        display:"top",
                        marginY:'2vh'
                    }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridGap: 1,
                            gridTemplateColumns: 'repeat(auto-fit, minmax(1vh, 1fr))',        
                        }}>

                        <Heading p={3} bg='muted'>

                            <Text 
                                    htmlFor='name' 
                                    fontSize={[ 3, 4, 8 ]}
                                    fontWeight={"bold"}
                                    marginRight={".2em"}
                                    color={"black"}>
                                    {`${state.responseFromServer[1][1]}`}
                            </Text>
                         </Heading>
                    </Box>

                    <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginBottom:'0.1vh'
                                }}>

                    <Heading p={3} bg='muted'>
                        <Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            fontSize={[ 3, 4, 6 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}>
                                    Time Table
                        </Text>
                        <Table   columns={9}
                                 data={[
                                        "DAY",
                                        "8",
                                        "9",
                                        "10",
                                        "11:30",
                                        "12:30",
                                        "14:00",
                                        "15:00",
                                        "16:00"
                                    ]}/>
                        <FullTimetable tt={state.responseFromServer[3]}/>
                    </Heading>
                    </Box>
                    <Box sx={{ display: 'flex',}}>
                   <PieChartTable 
                   subjects = {subjects} 
                   studentAttendance={state.responseFromServer[0]}
                   totalAttendance={state.responseFromServer[2]} />
                    </Box>
                    <Text color={"rgba(255,20,20,0.9)"}
                    textAlign={"center"}
                    >Red is bad</Text>
                    <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginTop:'0.1vh'}}>
                    <Heading p={3} bg='muted'>
                            <Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            fontSize={[ 3, 4, 6 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}>
                                    ATTENDANCE
                            </Text>

                            <Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            display='flex'
                            flex-wrap= 'wrap'
                            fontSize={[ 3, 4, 5 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}> {`${state.responseFromServer[1][0]}`}   
                            </Text>
                            <Table  columns={7}  data={subjects}/>
                            <Table columns={7}  
                                data={state.responseFromServer[0]} 
                                totalAttendance = {state.responseFromServer[2]}
                                moreData={true}
                                />
                    </Heading>
                    </Box>
                </Card>
    </Box>)
    )
    
}

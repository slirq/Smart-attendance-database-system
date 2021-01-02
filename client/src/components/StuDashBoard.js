import React, { useEffect,useContext, useReducer } from 'react'
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
    // const {uniqueID} = useContext(MyContext)
    let uniqueID="1bi18cs032"
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
        <div className="backGround">
                
            <div className="tab">
                    <div className="Card">
                            <h2   style={{fontSize:"2em",fontWeight:"bold",marginRight:".2em",color:"aliceblue"  }} >
                                    {`${state.responseFromServer[1][1]}`}
                            </h2>

                    </div>

                    <div className="Card">
                    <h2 style={{fontSize:"2em"}}>Time Table</h2>
                    <FullTimetable tt={state.responseFromServer[3]} student={true} />
                    </div>
                    <div style={{ display: 'flex'}}>
                        <PieChartTable subjects = {subjects} 
                        studentAttendance={state.responseFromServer[0]}
                        totalAttendance={state.responseFromServer[2]} />
                    </div>
                    <div className="Card">
                            <h2>ATTENDANCE</h2>
                            <h2 >{`${state.responseFromServer[1][0].toUpperCase()}`}</h2>                               
                            <Table uniStr="staDaB-2-" columns={7}  data={subjects} />
                            <Table columns={7}  uniStr="staDaB-3-"
                                data={state.responseFromServer[0]} 
                                totalAttendance = {state.responseFromServer[2]}
                                />

                    </div>
                </div>
    </div>)
    )
    
}

import React, { useEffect,useContext, useReducer } from 'react'
import {MyContext }from '../context/context'
import Table from './smallComponents/Table'
import axios from 'axios'
import PieChartTable from './smallComponents/PieCharts'
import FullTimetable from './smallComponents/FullTimetable'
import Name from './smallComponents/Name'
const initialState={
    loading:true,
    error:'',
    usn:[],
    ta:[],
    sa:[],
    name:'',
    tt:[],
    responseFromServer:[]
}
const reducer =(state,action)=>{
    // console.log(action.payload,"action type is ")
    switch(action.type){
        case "initialFetch":
            return {
                loading:false,
                error:'',
                usn:action.payload.usn,
                ta:action.payload.ta,
                sa:action.payload.sa,
                tt:action.payload.tt,
                name:action.payload.name,
                // responseFromServer:action.payload
            }
        case "notFetched":
            return {...state,
                loading:false,
                error:"something went wrong",
                responseFromServer:[]
            }
        default:return state
    }
}

export default function StuDashBoard() {    
    const {uniqueID} = useContext(MyContext)
    // let uniqueID="1bi18cs032"
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
                dispatch({type:"initialFetch",payload:{
                    usn:reply[1][0],
                    ta:reply[2],
                    sa:reply[0],
                    tt:reply[3],
                    name:reply[1][1]}})

        })();
        // eslint-disable-next-line
    },[])
    console.log(state)
    const width=1/(state.sa.length)*100
    return(state.loading?"Loading":(
        <div className="backGround">
                
            <div className="tab">
                    <div className="Card">
                        <Name name={state.name} styleProp={{fontSize:"2em",fontWeight:"bold",marginRight:".2em",color:"aliceblue"}} />
                    </div>

                    <div className="Card">
                    <h2 style={{fontSize:"2em"}}>Time Table</h2>
                    <FullTimetable tt={state.tt} student={true} />
                    </div>
                    <div style={{ display: 'flex'}}>
                        <PieChartTable subjects = {subjects} 
                        studentAttendance={state.sa}
                        totalAttendance={state.ta } />
                    </div>
                    <div className="Card">
                            <h2>ATTENDANCE</h2>
                            <h2 >{`${state.usn.toUpperCase()}`}</h2>                               
                            <Table uniStr="staDaB-2-" columns={7}  data={subjects} />
                            {/* <Table columns={7}  uniStr="staDaB-3-" data={state.sa} /> */}

                                <div style={{
                                            display:"flex",
                                            boxSizing:'border-box',
                                            border:"1px solid",
                                            margin:0,
                                            minWidth:0,
                                            flexWrap:"wrap" }}>
                                    {state.sa.map((item,index)=>{ 

                                        return(
                                                <div className="kaBaccha" style={{fontWeight:"bold",
                                                                        margin:0,
                                                                        minWidth:0,
                                                                        padding:0,
                                                                        marginTop:".2em",
                                                                        marginBottom:".2em",
                                                                        width:`${width}%`}}>
                                                {`${item}/${state.ta[index]}`}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                    </div>
                </div>
    </div>)
    )
    
}

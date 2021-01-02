import React,{useEffect,useReducer,useContext} from 'react'
import axios from 'axios'
import {MyContext }from '../context/context'
// import {Input} from '@rebass/forms'
// import Table from './smallComponents/Table'
import FullTimetable from './smallComponents/FullTimetable'
import ClassesUpdate from './smallComponents/ClassesUpdate'
import Name from './smallComponents/Name'
import AttendanceView from './smallComponents/AttendanceView'
import StudentLogView from './smallComponents/StudentLogView'
import ClassLogView from './smallComponents/ClassLogView'
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
                section:action.payload.sec,
                error:""}
                case "ttChange":return{...state, tt:action.payload}
                case "notFetched":return {...state,error:"something went wrong"}
                default:{
                    return state
                }
            }
        }
export default function StaffDashBoard() {
    // const {uniqueID} = useContext(MyContext)
    let uniqueID = 'abc1'
    const [state,dispatch]=useReducer(reducer,initialState)
    const sections =["A","B","C"]
    
    const fetchData = async ()=>{
        const result= await axios({"method":"post","url":"http://localhost:5000/getStaffInfo",
        "data":{uniqueID:uniqueID}})
        
        return result.data 
        }
        
    useEffect(() => {
    (
        async()=>{
            let reply = await fetchData()
            dispatch({type:"initialFetch",payload:{tt:reply[2],subjects:reply[3],sec:reply[1][0],name:reply[0][0]}})

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
    return(state.loading?<h2 style={{
        height:"100%",
        width:"100%",
        background:"linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
        color: 'white',
        bg: 'gray',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>"LOADING"</h2>
    :
        <div className="backGround">
        <div className="tab">
                <Name name ={state.name}/>
                <ClassesUpdate subjects={state.subjects} uniqueID={uniqueID}/>
                <div className="Card">  
                    <h2>Time Table</h2>
                    <div style={{display:"flex",justifyContent:'center',marginBottom:'1vh'}}>
                        <label style={{paddingRight:".7em"}}>SECTION</label>
                        <select style={{}} onChange={handleSectionChange} defaultValue={state.sec} >
                            {sections.map((item,index)=><option key={`sta-DaBo-0-${index}`} value={`${item}`}>{item}</option>)}
                        </select>
                    </div>
                    <FullTimetable tt={state.tt}  />
                </div>
                <AttendanceView subjects={state.subjects} sections={sections} />                
                <StudentLogView subjects={state.subjects} sections={sections}  />
                <ClassLogView Tid={uniqueID}/> 
            </div>
        </div>
    )
}
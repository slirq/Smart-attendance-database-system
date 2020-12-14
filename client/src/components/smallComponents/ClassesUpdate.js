import React,{useState,useRef} from 'react'
import { Text,Box,Card,Heading} from 'rebass'
import Calendar from 'react-calendar'
export default function ClassesUpdate() {
    const [value, onChange] = useState(new Date());
    const [toggle, setToggle] = useState(false)
    console.log(value)
    const onClickDay = (value,event)=>{
        console.log(value)
    }
    const makeVisible=(e)=>{
        setToggle(!toggle)
    }
    return (
       <Box sx={{display:"flex",background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em", margin:'2vh',marginY:'0.2vh',
       flexDirection:"row"}}>
            <div onClick={makeVisible} style={{color:"red",width:"100vw"}}>
                <span style={{width:"100vw",display:"flex",margin:"unset",justifyContent:"center"}}>Calendar</span>    
                <Box className = {toggle?"show":"calendar"} sx={{width:"50vw",position:'relative',left:"10vh"}}>
                    <Calendar  onChange={onChange} onClickDay={onClickDay} value={value} />
                </Box> 
            </div>
       </Box>
    )
}

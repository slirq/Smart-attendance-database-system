import React,{useState} from 'react'
import axios from 'axios'
export default function ClassLogView({Tid}) {
    const [serverReply, setserverReply] = useState([])
     const   GetInfo= async (e)=>{
            let reply = await axios({
                "method":"post",
                "url":"http://localhost:5000/classLogView",
                "data":{"Tid":Tid}})
                console.log("HUI")
            
            setserverReply(reply.data)
             console.log(serverReply)
        }
    return (
        <div className='Card'>
            <h2 style={{fontSize:'6vh'}} >Class log</h2>
            <button type="submit" style={{width:"auto",height:'auto'}}  onClick={GetInfo}  >Get that log</button>       
            <div className="rowElement">Log</div>
            {serverReply.map((item,index)=><div className="rowElement">{item.log}</div>)}
    </div>
    )
}

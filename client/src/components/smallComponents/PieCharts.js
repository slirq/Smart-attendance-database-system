import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

export default function PieCharts({subjects,studentAttendance,totalAttendance}) {
    return (   subjects.map( (subject,index)=>{ 
        let percentageFillForPresent =  (studentAttendance[index] /(totalAttendance[index]))*100
        let percentageFillForAbsent =  100-percentageFillForPresent
         return(
            
                    <div className="pieBackGround" > 
                             <PieChart radius='50' key={index} startAngle={270}
                                data={[
                                { title: `present with ${(percentageFillForPresent).toFixed(2).concat('%')} classes`,
                                value: percentageFillForPresent ,
                                color:  'rgba(20,255,20,0.9)',
                                 },
                                { title: `absent with ${(percentageFillForAbsent).toFixed(2).concat('%')} classes`,
                                 value:percentageFillForAbsent, color: 'rgba(255,20,20,0.9)' }, ]}
                            />  
                           <h3  style={{ fontSize:[ 1, 3, 5 ],fontWeight:"bold",
                            paddingTop:"0.5em",paddingX:"2.5vw",color:"Black"}}> 
                                {subject}
                            </h3>
                    </div>)
    }))
}
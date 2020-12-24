import React from 'react'
import Table from './Table'   
export default function FullTimetable({tt}) {
    return (    <>
                <Table  columns={9}  
                        data={["Day","8:00","9:00","10:00","11:30","12:30","14:00","15:00","16:00"]} 
                        uniStr="tt-1-" />                           
                    {tt.map((day,index)=>{
                        return(<Table key={`ftt-1-${index}`} columns={9} data={day} />)})}     
                </>)
}

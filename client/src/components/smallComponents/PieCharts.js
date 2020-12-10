import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import {Text,Card} from 'rebass'

export default function PieCharts({subjects,studentAttendance,totalAttendance}) {
    return (   subjects.map( (subject,index)=>{ 
        let percentageFillForStudents =  studentAttendance[index] /(studentAttendance[index]+ totalAttendance[index])*100
        let percentageFillForTC =  (totalAttendance[index]-studentAttendance[index])/(studentAttendance[index]+ totalAttendance[index])*100
         return(
            
                    <Card
                            display='absolute'
                            sx={{
                                    marginTop:'auto',
                                    background: 'white',
                                    justifyContent:"center",
                                    alignItems:"center",
                                    borderRadius:"2em",
                                    marginY:'2vh',
                                    marginRight:'.5vh',
                                    marginLeft:'2vh',
                                    width:'17%',
                                    height:'25%',
                                    padding:'2vh'
                                 }} > 
                             <PieChart radius='50' key={index}
                                data={[
                                { title: `present with ${studentAttendance[index]} classes`,
                                value: percentageFillForStudents ,
                                color:  'rgba(20,255,20,0.9)' },
                        
                                { title: `absent with ${totalAttendance[index]-studentAttendance[index]}`,
                                 value:percentageFillForTC, color: 'rgba(255,20,20,0.9)' }, ]}
                            />  
                           <Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            > {subject}

                                </Text>
            </Card>)
    }))
}
import React from 'react'
import Table from './Table' 
import { Text,Box,Heading} from 'rebass'
  
export default function FullTimetable({tt}) {
    return (
        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",
        margin:'2vh',marginY:'0.2vh'}}>
              <Heading p={3} bg='muted'>
                <Text paddingBottom='2vh' htmlFor='name'  fontSize={[ 3, 4, 6 ]} fontWeight={"bold"}
                  marginRight={".2em"}  color={"White"}>
                          Time Table
                </Text>                         
                <Table   columns={9}  data={["Day","8:00","9:00","10:00","11:30","12:30","14:00",
                                                "15:00","16:00"]} uniStr="tt-1-" />
                {tt.map((day,index)=>{return(<Table key={`ftt-1-${index}`} columns={9} data={day} />)})}     
            </Heading>
        </Box>
    )
}

import React from 'react'
import {Heading,Text,Box} from 'rebass'
import Table from './Table'
import {useFormik} from 'formik'
export default function Views() {
    const formik = useFormik({
        initialValues:{
            section:"A"
        },
        onSubmit:async val=>{
            let {section} = value
            
        }
    })
    return (
                                      
        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',borderRadius:"2em",
                margin:'2vh',marginY:'0.2vh' }}>
            <Heading p={3} bg='muted'>
                <Text paddingBottom='2vh' htmlFor='name' fontSize={[ 3, 4, 6 ]}
                    fontWeight={"bold"} marginRight={".2em"}color={"White"}>
                    ATTENDANCE
                </Text>
                <Text paddingBottom='2vh' htmlFor='name' display='flex'  flex-wrap= 'wrap'
                    fontSize={[ 3, 4, 5 ]} fontWeight={"bold"} marginRight={".2em"} color={"White"}>
                    Section Placeholder
                </Text>
                <Table  columns={2} data={["USN","Subject"]}/>
                <Table  columns={2} data={["1Bi18cs003","26/30"]}/>
            </Heading>
        </Box>
    )
}

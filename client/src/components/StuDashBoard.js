import React, { useEffect, useState,useContext,useRef } from 'react'
import  {PieChart}  from 'react-minimal-pie-chart'
import {Text,Box,Card,Heading,} from 'rebass'
import {MyContext }from '../context/context'
import Table from './smallComponents/Table'
import axios from 'axios'


export default function StuDashBoard() {    
    const {uniqueID} = useContext(MyContext)
    let [responseFromServer,SetResponseFromServer] = useState({});
    let name = useRef(null)
    const fetchData = async ()=>{
             const result= await axios({
                 "method":"post",
                 "url":"http://localhost:5000/getAttendance",
                 "data":{
                     uniqueID:uniqueID
                        }
                })
                console.log(result.data)
                return result.data 
            }


    useEffect(() => {
        (async()=>{
                SetResponseFromServer(await fetchData());
                console.log(responseFromServer)
                // name.textContent =  responseFromServer[1][2]
        })();
        // eslint-disable-next-line
    },[SetResponseFromServer])

    return(responseFromServer?(
        <Box sx={{
            height:"100%",
            width:"100%",
            background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",
            color: 'white',
            bg: 'gray',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        } }>
        <Card

                    sx={{
                        position:"relative",
                        width:"90%",
                        height:"wrap-content",
                        background:"rgba(131,22,219,0.8)",
                        boxShadow:'0 0 2em rgba(0, 0, 0, .7)',
                        borderRadius:"2em",
                        display:"top",
                        marginY:'2vh'
                        //padding:"43vh 80vh"
                        //flex-direction:"row",
                }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridGap: 1,
                            gridTemplateColumns: 'repeat(auto-fit, minmax(1vh, 1fr))',
                            
                        }}>
                        <Heading p={3} bg='muted'>
                            <Text ref={(el)=>name = el}
                            htmlFor='name' 
                            fontSize={[ 3, 4, 8 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"black"}
                                >
                                    {`${name}`}
                                </Text>
                         </Heading>
                            {/* <Box p={3} color='background' bg='primary' fontSize={[ 3, 4, 4 ]}>
                                info and stuff
                            </Box> */}
                    </Box>
                    <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginBottom:'0.1vh'
                }}>
                    <Heading p={3} bg='muted'>
                            <Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            fontSize={[ 3, 4, 6 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}
                                >
                                    Time Table
                                </Text>
                                <Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            display='flex'
                            flex-wrap= 'wrap'
                            fontSize={[ 3, 4, 5 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}
                                >
                                    Day
                                </Text>
                                <Table
                                    
                                    columns={8}
                                    data={[
                                        "8AM",
                                        "9AM",
                                        "10AM",
                                        "11:30AM",
                                        "12:30PM",
                                        "2PM",
                                        "3PM",
                                        "4PM"
                                    ]}
                                    />
                                    <Table
                    
                    columns={8}
                    data={[
                        "ATCI",
                        "ME",
                        "CNS",
                        "ADP",
                        "UNIX",
                        "EVS",
                        "DBMS"
                    ]}
                    />
                    </Heading>
                    </Box>
                    <Box sx={{ display: 'flex',
                    }}
                   >
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
    
                                
                             <PieChart radius='50'
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' }, ]}
                            />  
                           <Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            
                                > DBMS
                                </Text>

                            </Card>
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
                             marginLeft:'0.5vh',
                             width:'17%',
                             height:'25%',
                            padding:'2vh'
                                 }} >
    
                                
                             <PieChart radius='50'
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' }, ]}
                            />  
                           < Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            
                                > ADP
                                </Text>

                            </Card>
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
                             marginLeft:'0.5vh',
                             width:'17%',
                             height:'25%',
                            padding:'2vh'
                                 }} >
    
                                
                             <PieChart radius='50'
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' }, ]}
                            />  
                           < Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            
                                > ATCI
                                </Text>

                            </Card>
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
                             marginLeft:'0.5vh',
                             width:'17%',
                             height:'25%',
                            padding:'2vh'
                                 }} >
    
                                
                             <PieChart radius='50'
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' }, ]}
                            />  
                           < Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            
                                > ME
                                </Text>

                            </Card>
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
                             marginLeft:'0.5vh',
                             width:'17%',
                             height:'25%',
                            padding:'2vh'
                                 }} >
    
                                
                             <PieChart radius='50'
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' }, ]}
                            />  
                           < Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            
                                > CNS
                                </Text>

                            </Card>
                            <Card
                            display='absolute'
                            
                             sx={{
                            marginTop:'auto',
                            background: 'white',
                            justifyContent:"center",
                            alignItems:"center",
                             borderRadius:"2em",
                             marginY:'2vh',
                             marginRight:'2vh',
                             marginLeft:'0.5vh',
                             width:'17%',
                             height:'25%',
                            padding:'2vh'
                                 }} >                               
                             <PieChart radius='50'
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' }, ]}
                            />  
                           < Text 
                            position='absolute'
                            fontSize={[ 1, 3, 5 ]}
                            fontWeight={"bold"}
                            paddingTop="0.5em"
                            paddingX="3.9vw"
                            color={"Black"}
                            
                                > UNIX
                                </Text>
                            </Card>   
                    </Box>
                    <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginTop:'0.1vh'
                }}>
                    <Heading p={3} bg='muted'>
                            < Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            fontSize={[ 3, 4, 6 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}
                                >
                                    ATTENDANCE
                                </Text>
                                < Text 
                            paddingBottom='2vh'
                            htmlFor='name' 
                            display='flex'
                            flex-wrap= 'wrap'
                            fontSize={[ 3, 4, 5 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"White"}
                                >
                                    1BI18CSxxx
                                </Text>
                                <Table                                
                                    columns={6}
                                    data={[
                                        "ADP",
                                        "UNIX",
                                        "ME",
                                        "ADP",
                                        "DBMS",
                                        "ATCI",
                                    
                                    ]}
                                    />
                                    <Table                    
                    columns={6}
                    data={[
                        "26/30",
                        "26/30",
                        "26/30",
                        "26/30",
                        "26/30",
                        "26/30",
                
                    ]}
                    />
                    </Heading>
                    </Box>
                </Card>
    </Box>
    )
    :
    "Loading"
    )
}

import React,{useEffect,useReducer,useContext} from 'react'
import axios from 'axios'
import {MyContext }from '../context/context'
import {Input} from '@rebass/forms'
import Table from './smallComponents/Table'
import { Text,Box,Card,Button,Heading} from 'rebass'
import UseStepper from 'use-stepper';
const initialState={
    loading:true,
    error:'',
    responseFromServer:[]
}
const reducer =(state,action)=>{
    // console.log(action.payload,"action type is ")
    switch(action.type){
        case "fetched":
            return {
                loading:false,
                error:'',
                responseFromServer:action.payload
            }
        case "notFetched":
            return {
                loading:false,
                error:"something went wrong",
                responseFromServer:[]
            }
        default:return state
    }
}


export default function StaffDashBoard() {
    const {uniqueID} = useContext(MyContext)
    const [state,dispatch]=useReducer(reducer,initialState)
    const fetchData = async ()=>{
        const result= await axios({"method":"post","url":"http://localhost:5000/getStaffInfo","data":{uniqueID:uniqueID }})
        return result.data 
        }
    console.log(state)
    useEffect(() => {
    (
        async()=>{
            let reply = await fetchData()
            dispatch({type:"fetched",payload:reply})

    })();
    // eslint-disable-next-line
    },[])


  const {
    getFormProps,
    getInputProps,
    getIncrementProps,
    getDecrementProps,
  } = UseStepper()

    return(state.loading?"LOADING":
        <Box sx={{
            height:"100%",
            width:"100%",
            background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",
            color: 'white',
            bg: 'gray',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }} >
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
                            <Text 
                            htmlFor='name' 
                            fontSize={[ 3, 4, 8 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"black"}
                                >
                                   {`${state.responseFromServer[0][0]}`}
                                </Text>
                         </Heading>
                          </Box>
                          <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginBottom:'0.1vh',
                                display:'flex',
                               
                                }}>
                                      <Heading p={3} bg='muted' width='100%'>
                                      <Text 
                                          paddingBottom='2vh'
                                          htmlFor='name' 
                                          fontSize={[ 3, 4, 6 ]}
                                          fontWeight={"bold"}
                                          marginRight={".2em"}
                                          color={"White"}
                                              >
                                                  {`Total classes completed in ${state.responseFromServer[0][1]}`}
                                              </Text>     
                                       
                                  <Box {...getFormProps()}


                                sx={{
                                    borderRadius:"2em",
                                    margin:'2vh',
                                    marginBottom:'0.1vh',
                                    display:'flex',
                                    justifyContent:"center",
                                    alignItems:"center",
                                    
                                    }}
                                  
                                  >
                                      <Button variant='primary'
                                    {...getDecrementProps()}
                                    type={"button"}
                                    color={"black"}
                                    
                                   htmlFor='name' 
                                   fontSize={[ 3, 4, 4 ]}
                                   fontWeight={"bold"}
                                    
                                    sx={{
                                    height:"4em",
                                    width:"33%",
                                    textAlign:"center",
                                    background:"Red",
                                    marginY:"2vh", 
                                    marginX:".2em",
                                    border:"2px solid black",
                                    borderRadius:".7em" }}
                                      >-</Button>



                                      <Input variant='primary'
                                        {...getInputProps()}
                                       type={"button"}
                                       color={"black"}
                                       backgroundColor='white'
                                      htmlFor='name' 
                                      fontSize={[ 3, 4, 4 ]}
                                      fontWeight={"bold"}
                                      padding='3.5vh'
                                      
                                       sx={{
                                       height:"4em",
                                       width:"33%",
                                       textAlign:"center",
                                       
                                       marginY:"2vh", 
                                       marginX:".2em",
                                       border:"2px solid black",
                                       borderRadius:".7em" }}
                                      />


                                      <Button variant='primary'
                                       {...getIncrementProps()}
                                       type={"button"}
                                       color={"black"}
                                       
                                      htmlFor='name' 
                                      fontSize={[ 3, 4, 4 ]}
                                      fontWeight={"bold"}
                                      
                                       sx={{
                                       height:"4em",
                                       width:"33%",
                                       textAlign:"center",
                                       background:"green",
                                       marginY:"2vh", 
                                       marginX:".2em",
                                       border:"2px solid black",
                                       borderRadius:".7em" }}
                                      >+</Button>
                                        
                                        </Box>
                                        </Heading></Box>
                                        <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginY:'0.1vh',
                                display:'flex',
                                }}>
                                      <Heading p={3} bg='muted' width='100%'>
                                      <Text 
                                          paddingBottom='2vh'
                                          htmlFor='name' 
                                          fontSize={[ 3, 4, 6 ]}
                                          fontWeight={"bold"}
                                          marginRight={".2em"}
                                          color={"White"}
                                              >
                                                  Facial Recogntion System
                                              </Text>     
                                        <Box
                        
                                        sx={{
                                borderRadius:"2em",
                                margin:'2vh',
                                marginBottom:'0.1vh',
                                display:'flex',
                                justifyContent:"center",
                                  alignItems:"center",
                                  
                                }}
                                        >
                                      <Button variant='primary'
                                       //onClick={handleTTChange} 
                                       type={"button"}
                                       color={"black"}
                                       
                                      htmlFor='name' 
                                      fontSize={[ 3, 4, 4 ]}
                                      fontWeight={"bold"}
                                      
                                       sx={{
                                       height:"4em",
                                       width:"50%",
                                       textAlign:"center",
                                       background:"green",
                                       marginY:"2vh", 
                                       marginX:".2em",
                                       border:"2px solid black",
                                       borderRadius:".7em" }}
                                      >Start</Button>


                                      <Button variant='primary'
                                       //onClick={handleTTChange} 
                                       type={"button"}
                                       color={"black"}
                                       
                                      htmlFor='name' 
                                      fontSize={[ 3, 4, 4 ]}
                                      fontWeight={"bold"}
                                       
                                       sx={{
                                       height:"4em",
                                       width:"50%",
                                       textAlign:"center",
                                       background:"Red",
                                       marginY:"2vh", 
                                       marginX:".2em",
                                       border:"2px solid black",
                                       borderRadius:".7em" }}                                       
                                      >Stop</Button>
                                        </Box>
                                        </Heading></Box>

                                <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginY:'0.2vh',
                                
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
                                
                                <Table
                                    
                                    columns={9}
                                    data={[
                                      "Day",
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
                                      columns={9}
                                      data={[
                                          "Monday",
                                          "UNIX",
                                          "ME",
                                          "ADP",
                                          "DBMS",
                                          "ATCI",
                                          "",
                                          ""
                                      ]}
                                      />
                                      <Table
                                      columns={9}
                                      data={[
                                          "Tuesday",
                                          "UNIX",
                                          "ME",
                                          "ADP",
                                          "DBMS",
                                          "ATCI",
                                          "",
                                          ""
                                      ]}
                                      />
                                      <Table
                                      columns={9}
                                      data={[
                                          "Wednesday",
                                          "UNIX",
                                          "ME",
                                          "ADP",
                                          "DBMS",
                                          "ATCI",
                                          "",
                                          ""
                                      ]}
                                      />
                                      <Table
                                      columns={9}
                                      data={[
                                          "Thursday",
                                          "UNIX",
                                          "ME",
                                          "ADP",
                                          "DBMS",
                                          "ATCI",
                                          "",
                                          ""
                                      ]}
                                      />
                                      <Table
                                      columns={9}
                                      data={[
                                          "Friday",
                                          "UNIX",
                                          "ME",
                                          "ADP",
                                          "DBMS",
                                          "ATCI",
                                          "",
                                          ""
                                      ]}
                                      />
                                      <Table
                                      columns={9}
                                      data={[
                                          "Saturday",
                                          "UNIX",
                                          "ME",
                                          "ADP",
                                          "DBMS",
                                          "ATCI",
                                          "",
                                          ""
                                      ]}
                                      />
                                      </Heading>
                                      <Button variant='primary'
                                       //onClick={handleTTChange} 
                                       type={"button"}
                                       color={"black"}
                                       
                                      htmlFor='name' 
                                      fontSize={[ 1, 2, 3 ]}
                                      
                                       sx={{
                                       height:"2.5em",
                                       
                                       textAlign:"center",
                                       marginLeft:'155vh',
                                       marginBottom:"2vh", 
                                       border:"2px solid black",
                                       borderRadius:".7em" }}
                                      >Save changes</Button>
                                    </Box>
                              <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginY:'0.2vh' }}>
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
                                                  Section Placeholder
                                              </Text>
                                              <Table
                                                  
                                                  columns={2}
                                                  data={[
                                                      "USN",
                                                      "Subject",
                                                  
                                                  ]}
                                                  />
                                                  <Table
                                  
                                  columns={2}
                                  data={[
                                      "1Bi18cs003",
                                      "26/30",
                                      
                              
                                  ]}
                                  />
                                  </Heading>
                    </Box>
                    <Box sx={{background: 'rgba(0, 0, 0, 0.8 )',
                                borderRadius:"2em",
                                margin:'2vh',
                                marginTop:'0.1vh' }}>
                                  <Heading p={3} bg='muted'>
                                          < Text 
                                          paddingBottom='2vh'
                                          htmlFor='name' 
                                          fontSize={[ 3, 4, 6 ]}
                                          fontWeight={"bold"}
                                          marginRight={".2em"}
                                          color={"White"}
                                              >
                                                  Student log/Class Log
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
                                                  select student placeholder
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
                                                  select timeframe placeholder {/*default should be all students*/}
                                              </Text>
                                              <Table
                                                  
                                                  columns={3}
                                                  data={[
                                                      "USN",
                                                      "Subject",
                                                      "Timestamp"
                                                  
                                                  ]}
                                                  />
                                                  <Table
                                  
                                  columns={3}
                                  data={[
                                    "1BI18Cxxx",
                                      "UNIX",
                                      "00:00:00 16/4/2020",
                              
                                  ]}
                                  />
                                  </Heading>
                    </Box>


                    
                </Card>
                
        </Box>
    )
}
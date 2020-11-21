import React from 'react'
import axios from 'axios'
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms'
import { Box,Card, Flex,Button,Text } from 'rebass'

export default function signUp() {
    const handleSubmit=(e)=>{
        let usn=document.querySelector('#usn').value.toLowerCase()
        let password=document.querySelector('#pwd').value
        let name=document.querySelector('#name').value
        let brnch=document.querySelector('#brnch').value
        let sec=document.querySelector('#sec').value
        axios( {
            method:'post',
            url:'http://localhost:5000/signUp',
            data:{
                usn: usn,
                password: password,
                name:name,
                brnch:brnch,
                sec:sec
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    return (
            <Box sx={{
                    height:"100vh",
                    width:"100vw",
                    background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)",
                    color: 'white',
                    bg: 'gray',
                }} >
                    
                <Card
                    as='form'
                    sx={{
                        transform: "translate(50%, 30%)",
                        
                        width:"20vw",
                        mx:"60vh",
                        
                        height:"wrap-content",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 16px rgba(0, 0, 0, .55)'
                        
                }}
                >
                < Text htmlFor='name' 
                textAlign={"center"} 
                fontSize={[ 3, 4, 5 ]}
                fontWeight={"bold"}
                >Sign Up</Text>
                    <Flex  flexDirection={"column"}>
                    <Box width={"20vw"} p={"0.5vw"}  px={"1.5vw"}   transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>USN</Label>
                                <Input
                                    id='usn'
                                    type="text"
                                    
                                />

                        </Box>
                        <Box width={"20vw"} py={"0.5vw"} px={"1.5vw"}   transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>password</Label>
                                <Input
                                    id='pwd'
                                    type="password"
                                    
                                />
                        </Box>
                        <Box width={"20vw"}  py={"0.5vw"} px={"1.5vw"}    transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Full Name</Label>
                                <Input
                                    id='name'
                                    type="text"
                                    
                                />
                            </Box>
                        <Box width={"20vw"}  py={"0.5vw"} px={"1.5vw"}    transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Branch</Label>
                                <Input
                                    id='brnch'
                                    type="text"
                                    
                                />
                            </Box>
                            
                        <Box width={"20vw"}  py={"0.5vw"}  px={"1.5vw"}    transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Section</Label>
                                <Input
                                    id='sec'
                                    type="text"
                                    
                                />
                        </Box>
                        <Box width={"20vw"} py={"0.5vw"} px={"1.5vw"}    transform= {"translate(50%, 50%)"} >
                        <Button onClick={handlePhoto}sx={{background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%) ",border:"2px solid black"}} >upload photo</Button>

                        </Box>
                        <Box width={"20vw"} py={"0.5vw"} px={"1.5vw"}   transform= {"translate(50%, 50%)"} >
                        <Button onClick={handleSubmit} sx={{background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,border:"2px solid black" }} >
                            SUBMIT
                        </Button>

                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

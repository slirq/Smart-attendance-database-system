import React from 'react'
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms'
import { Box,Card, Flex,Button } from 'rebass'

export default function signUp() {
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
                        transform: "translate(50%, 50%)",
                        mx:"30vw",
                        width:"20vw",
                        height:"60vh",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 16px rgba(0, 0, 0, .55)'
                        
                }}
                >
                < Label htmlFor='name' mx={"8vw"}>Sign Up</Label>
                    <Flex  flexDirection={"column"}>
                    <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>USN</Label>
                                <Input
                                    id='usn'
                                    type="text"
                                    
                                />

                        </Box>
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>password</Label>
                                <Input
                                    id='pwd'
                                    type="password"
                                    
                                />
                        </Box>
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Full Name</Label>
                                <Input
                                    id='pwd'
                                    type="text"
                                    
                                />
                        </Box>
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                        <Button sx={{background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)"}} >upload photo</Button>

                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

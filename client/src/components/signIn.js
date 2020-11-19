import React from 'react'
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms'
import { Box,Card, Flex } from 'rebass'

export default function signIn() {
    return (
            <Box sx={{
                    height:"100vh",
                    background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)",
                    color: 'white',
                    bg: 'gray',
                }} >
                <Card
                sx={{
                    transform: "translate(0, 60%)",
                    mx:"30vw",
                    width:"20vw",
                    height:"40vh",
                    background:"rgba(131,22,219,0.3)",
                    boxShadow:'0 0 16px rgba(0, 0, 0, .55)'
                    
                }}
                >
                < Label htmlFor='name' mx={"8vw"}>Sign In</Label>
                    <Flex  flexDirection={"column"}>
                    
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Email</Label>
                                <Input
                                    id='emal'
                                    name='Email'
                                    type="email"
                                    defaultValue='@gmail.com'
                                    
                                />

                        </Box>
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>password</Label>
                                <Input
                                    id='pwd'
                                    type="password"
                                    
                                />

                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

import React from 'react'
import lmi from './lmi.svg'
import axios from 'axios'
import {
    Label,
    Input
  } from '@rebass/forms'
import { Box,Card,Image, Flex} from 'rebass'

export default function signIn() {
    const handleClick=(e)=>{
        let usn=document.querySelector('#usn').value.toLowerCase()
        let password=document.querySelector('#pwd').value
        axios( {
            method:'post',
            url:'http://localhost:5000/signIn',
            data:{
                usn: usn,
                password: password}
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log(password)
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
                        transform: "translate(50%, 50%)",
                        mx:"30vw",
                        width:"20vw",
                        height:"43vh",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 16px rgba(0, 0, 0, .55)'
                        
                }}
                >
                < Label htmlFor='name' mx={"8vw"}>Sign In</Label>
                    <Flex  flexDirection={"column"}>
                    
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Email</Label>
                                <Input
                                    id='usn'
                                    name='usn'
                                    type="text"
                                    defaultValue='1BI18CS032'
                                />

                        </Box>
                        <Box width={"20vw"} p={"2vw"} transform= {"translate(60%, 60%)"} >
                            < Label htmlFor='name'>Password</Label>
                                <Input
                                    id='pwd'
                                    type="password"
                                />
                        <Flex  flexDirection={"column"} sx={{
                            width:"100vm",
                            height:"100vh",
                            px:"5vw"
                        }}>

                            <Image src={lmi}
                            sx={{
                                width: "5em",
                                height: "5em",
                              }}
                              onClick={handleClick}
                               />
                            <Label>LET ME IN!!!! </Label>
                        </Flex>    
                        
                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

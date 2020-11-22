import React from 'react'
import axios from 'axios'
import { useContext } from "react";
import {MyContext} from "../context/context"
import { Label, Input  } from '@rebass/forms'
import { Text,Box,Card,Button, Flex} from 'rebass'

export default function SignIn() {
    const {isVerified ,setVerified} = useContext(MyContext)
    const enter=(e)=>{if(e.which===13)SignInVerify();}
    const SignInVerify = async ()=>{
        let usn=document.querySelector('#usn').value.toLowerCase()
        let password=document.querySelector('#pwd').value
        try{
            const response = await axios( {method:'post',url:'http://localhost:5000/signIn', data:{
                                        usn: `${usn}`,
                                        password: `${password}`} })
                                        console.log(response.data.reply)
           setVerified(response.data.reply?1:0)
            }
        catch(error){console.log(error)}
    }
    const handleClick=(e)=>{ SignInVerify()  }
    return (
            <Box sx={{
                    height:"100vh",
                    width:"100vw",
                    background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)",
                    color: 'white',
                    bg: 'gray',
                    overflow:'hidden'
                }} >
                    
                <Card
                    as='form'
                
                    sx={{
                        transform: "translate(50%, 70%)",
                        mx:"30vw",
                        width:"20vw",
                        height:"40vh",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 2em rgba(0, 0, 0, .6)',
                        borderRadius:"2em"
                        
                }}
                >
                < Text htmlFor='name' 
                textAlign={"center"} 
                fontSize={[ 3, 4, 5 ]}
                fontWeight={"bold"}
                >Sign In</Text>
                    <Flex  flexDirection={"column"}>
                    
                        <Box width={"20vw"} p={"1vw"} transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Email</Label>
                                <Input
                                    id='usn'
                                    name='usn'
                                    type="text"
                                    defaultValue='1BI18CS032'
                                />

                        </Box>
                        <Box width={"20vw"} p={"1vw"} transform= {"translate(60%, 60%)"} >
                            < Label htmlFor='name'>Password</Label>
                                <Input
                                    id='pwd'
                                    type="password"
                                    onKeyUp={enter}
                                />
                        <Flex  flexDirection={"column"} sx={{
                            width:"100vm",
                            height:"100vh",
                            px:"5vw"
                        }}>
                        
                        <Box width={"100%"}  transform= {"translate(40%, 50%)"} >
                        {isVerified?
                            <Text sx={{color:"green"}}>
                                Hol'up we signing you in....
                            </Text>
                            :
                            <Text sx={{color:"red"}}>
                                ooh thats wrong password buddy
                            </Text>}
                        </Box> 
                        <Box width={"100%"} py={"3vh"}    transform= {"translate(40%, 50%)"} >
                                <Button onClick={handleClick} 
                                        type={"button"}
                                        sx={{flexDirection:"rows",textAlign:"center",background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,
                                        border:"2px solid black" }} >
                                            SUBMIT
                                </Button>
                        </Box>   
                        </Flex>
                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

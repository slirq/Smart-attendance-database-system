import React from 'react'
import axios from 'axios'
import {
    Label,
    Input,
    
  } from '@rebass/forms'
import { Box,Card, Flex,Button,Text } from 'rebass'

export default function signUp() {
    const getValues=()=>{

        let usn=document.querySelector('#usn').value.toUpperCase()
        let password=document.querySelector('#pwd').value
        let name=document.querySelector('#name').value
        let sec=document.querySelector('#sec').value
        return [usn,password,name,sec];
    }
    const handleSubmit=(e)=>{
        const[usn,password,name,sec]=getValues();
        e.preventDefault()
        axios( {
            method:'post',
            url:'http://localhost:5000/signUp',
            data:{
                usn: usn,
                password: password,
                name:name,
                sec:sec
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    const handlePhoto=(e)=>{
        const[usn]=getValues();
        console.log("hallo")
        e.preventDefault()
        axios( {
            method:'post',
            url:'http://localhost:5000/cam',
            data:{usn:usn}
          }) 
    }
        

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
                        transform: "translate(60%, 30%)",
                        width:"20vw",
                        mx:"60vh",
                        height:"wrap-content",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 16px rgba(0, 0, 0, .55)',
                        borderRadius:"2em"
                }}
                >
                < Text htmlFor='name' 
                textAlign={"center"} 
                fontSize={[ 3, 4, 5 ]}
                fontWeight={"bold"}>
                    Sign Up
                </Text>
                    <Flex  flexDirection={"column"}>
                        <Box width={"20vw"} p={"0.5vw"}  px={"1.5vw"}   transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>USN</Label>
                            <Input  id='usn' type="text" defaultValue='1BI'/>
                        </Box>
                        <Box width={"20vw"} py={"0.5vw"} px={"1.5vw"}   transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Password</Label>
                                <Input id='pwd'    type="password" />
                        </Box>
                        <Box width={"20vw"}  py={"0.5vw"} px={"1.5vw"}    transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Full Name</Label>
                            <Input  id='name'  type="text"   />
                        </Box>
                        <Box width={"20vw"}  py={"0.5vw"}  px={"1.5vw"}    transform= {"translate(50%, 50%)"} >
                            < Label htmlFor='name'>Section</Label>
                            <Input  id='sec' type="text" />
                        </Box>
                        
                        <Box height={"4vw"} width={"20vw"} py={"0.5vw"} px={"6vw"}    transform= {"translate(50%, 50%)"} >
                            <Button  onClick={handlePhoto}  
                                    sx={{background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%) ",
                                    border:"2px solid black"}} >
                                        UPLOAD PHOTO
                            </Button>
                        </Box>
                        <Box width={"20vw"} py={"0.5vw"} px={"7vw"}   transform= {"translate(50%, 50%)"} >
                            <Button onClick={handleSubmit} 
                                    type={"button"}
                                    sx={{background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,
                                    border:"2px solid black" }} >
                                        SUBMIT
                            </Button>
                        </Box>
                        
                    </Flex>
                </Card>
            </Box>
    )
}

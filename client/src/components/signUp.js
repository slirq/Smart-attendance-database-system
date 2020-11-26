import React ,{useContext}from 'react'
import {MyContext} from "../context/context"
import axios from 'axios'
import {Input,Label} from '@rebass/forms'
import { Box,Card, Flex,Button,Text,Link } from 'rebass'

export default function SignUp() {
    let confirmation=0;
    const {isCreated ,setCreated} = useContext(MyContext)
    const getValues=()=>{

        let usn=document.querySelector('#usn').value.toUpperCase()
        let password=document.querySelector('#pwd').value
        let name=document.querySelector('#name').value
        let sec=document.querySelector('#sec').value
        return [usn,password,name,sec];
    }
    const handleSubmit = async (e)=>{
        const[usn,password,name,sec]=getValues();
        
        
        try{confirmation = await axios( { method:'post',
                                                url:'http://localhost:5000/signUp',
                                                data:{usn: usn,
                                                     password: password,
                                                     name:name,
                                                      sec:sec
                                                    }  
                                            }    
                                        )
                setCreated(confirmation.data.reply);
                // console.log(confirmation)
                }
          catch(error){
                console.log("error is",error)
            }
            e.preventDefault()
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
                    bg: 'gray',
                    overflow:'hidden',
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }} >
                    
                <Card
                    as='form'
                    sx={{
                        height:"50vh",
                        width:"35vw",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 16px rgba(0, 0, 0, .55)',
                        borderRadius:"2em",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                }}
                >
                < Text htmlFor='name' 
                textAlign={"center"} 
                fontSize={[ 3, 4, 5 ]}
                fontWeight={"bold"}
                sx={{
                    borderRight:"2em"
                }}>
                    Sign Up
                </Text>
                    <Flex paddingLeft={"2.6em"} flexDirection={"column"} sx={{
                                        // border:"2px solid black",
                                        marginRight:".6em",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center"
                                        }}>
                        <Box width={"15vw"}    >
                            < Label htmlFor='name'>USN</Label>
                            <Input  id='usn' type="text" defaultValue='1BI'/>
                        </Box>
                        <Box width={"15vw"}  >
                            < Label htmlFor='name'>Password</Label>
                                <Input id='pwd'    type="password" />
                        </Box>
                        <Box width={"15vw"}  >
                            < Label htmlFor='name'>Full Name</Label>
                            <Input  id='name'  type="text"   />
                        </Box>
                        <Box width={"15vw"}  >
                            < Label htmlFor='name'>Section</Label>
                            <Input  id='sec' type="text" />
                        </Box>
                        <Text
                            sx={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                my:".2em"
                                }}  
                            color={isCreated?"green":"orange"}>
                                {isCreated?"Yay you've registered":"waiting for ye to submit ...."}
                        </Text>
                        <Box 
                            p={"unset"}
                            height={"10vh"} 
                            width={"20vw"}   
                            sx={{
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center"
                            }}
                            >
                            <Button onClick={handlePhoto}  
                                    sx={{
                                        height:"3em",
                                        width:"7em",
                                        p:"unset",
                                        background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%) ",
                                        border:"2px solid black",
                                        marginRight:".6em",
                                        borderRadius:".7em",
                                        color:"black",
                                        fontFamily:"Sansita Swashed"
                                        }} >
                                        UPLOAD PHOTO
                            </Button>
                            <Button onClick={handleSubmit} 
                                    type={"button"}
                                    sx={{
                                        height:"3em",
                                        width:"6.5em",
                                        p:"unset",
                                        color:"black",
                                        background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,
                                        border:"2px solid black",
                                        borderRadius:".7em",
                                        fontFamily:"Sansita Swashed"
                                        }} >
                                        SUBMIT
                            </Button>
                        </Box>
                        <Box sx={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                        <Link       href="/signIn"
                                    type={"button"}
                                    sx={{
                                        height:"2em",
                                        width:"8em",
                                        background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,
                                        border:"2px solid black",
                                        textDecoration:"none",
                                        color:"black",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        borderRadius:".7em"
                                        }} >
                                        Sign in maybe?
                        </Link>
                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

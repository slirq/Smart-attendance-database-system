import React ,{useContext, useState,useRef}from 'react'
import {MyContext} from "../context/context"
import axios from 'axios'
import {Input,Label,Radio,Select} from '@rebass/forms'
import { Box,Card, Flex,Button,Text,Link } from 'rebass'

export default function SignUp() {
    let confirmation=0;
    const {isCreated ,setCreated} = useContext(MyContext)
    const [isStaff,setStaff] = useState(false)
    let usn=useRef(null)
    let password=useRef(null)
    let name=useRef(null)
    let sec=useRef(null)
    const handleSubmit = async (e)=>{
        [usn,password,name,sec] = [usn.value.toUpperCase(),
            password.value,
            name.value,
            sec.value]
        try{
            confirmation = await axios( { method:'post',
                                                url:'http://localhost:5000/signUp',
                                                data:{usn: usn,
                                                     password: password,
                                                     name:name,
                                                      sec:sec
                                                    }  
                                            }    
                                        )
                setCreated(confirmation.data.reply);
                }
          catch(error){
                console.log("error is",error)
            }
            e.preventDefault()
        }
    const handlePhoto=(e)=>{
        usn = usn.value.toUpperCase()
        e.preventDefault()
        axios( {
            method:'post',
            url:'http://localhost:5000/cam',
            data:{usn:usn}
          }) 
    }
    const student=()=>{
        return (
            <>
                <Box width={"15vw"}    >
                    < Label >USN</Label>
                    <Input  ref={el=>usn=el} type="text" defaultValue='1BI'/>
                </Box>
                <Box width={"15vw"}  >
                    < Label >Password</Label>
                    <Input ref={el=>password=el}    type="password" />
                </Box>
                <Box width={"15vw"}  >
                    < Label >Full Name</Label>
                    <Input  ref={el=>name=el}  type="text"   />
                </Box>
                <Box width={"15vw"}  >
                    < Label >Section</Label>
                    <Input  ref={el=>sec=el} type="text" />
                </Box>
            </>
        )
    }
    const staff=()=>{
        return (
            <>
                <Box width={"15vw"}  >
                    < Label >Full Name</Label>
                    <Input  ref={el=>name=el}  type="text"   />
                </Box>
                <Box width={"15vw"}  >
                    < Label >Password</Label>
                    <Input ref={el=>password=el}    type="password" />
                </Box>
                <Box width={"15vw"}  >
                    < Label >Section in charge</Label>
                    <Input  ref={el=>sec=el} type="text" />
                </Box>
                <Box width={"15vw"}  >
                    < Label >Your Subject?</Label>
                    <Select
                        fontFamily={"Sansita Swashed"}
                        id='location'
                        name='location'
                        defaultValue='NYC'>
                        <option>ME</option>
                        <option>CNS</option>
                        <option>DBMS</option>
                        <option>ATC</option>
                        <option>ADP</option>
                        <option>UNIX</option>
                    </Select>
                </Box>
            </>
        )
    }

    return (
            <Box sx={{
                    height:"100vh",
                    width:"100vw",
                    background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",   
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
                        background:"rgba(131,22,219,0.8)",
                        boxShadow:'0 0 16px rgba(0, 0, 0, .55)',
                        borderRadius:"2em",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                }}
                >
                < Text  
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
                        < Label width={"15vw"} m={".3em"}>Staff? <Radio value="red" onClick={e=>setStaff(!isStaff)} /> </Label>
                        {isStaff?staff():student()}

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

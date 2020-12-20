import React from 'react'
import axios from 'axios'
import { useContext,useState,useRef } from "react";
import {MyContext} from "../context/context"
import {Label,Input,Checkbox} from '@rebass/forms'
import { Text,Box,Card,Button, Flex,Link} from 'rebass'
import { useHistory } from 'react-router-dom';

export default function SignIn() {
    let history = useHistory()
    const {isVerified ,setVerified,uniqueID,setUniqueID} = useContext(MyContext)
    const [isStaff, setStaff] = useState(true)
    let  msg = useRef(null)
    const enter=(e)=>{if(e.which===13)SignInVerify();}
    const SignInVerify = async (e)=>{
        let usn=document.querySelector('#usn').value
        let password=document.querySelector('#pwd').value
        let staff = isStaff
        try{
            const response = await axios( {method:'post',url:'http://localhost:5000/signIn', data:{
                                        uniqueID: `${usn}`,
                                        password: `${password}`,
                                        staff: staff } })
                                        // console.log(response.data.reply)
            let result=response.data.reply?1:0;
            console.log(usn )
            setVerified(result)
            if(result){
                setUniqueID(usn)
                isStaff?history.push('staffDashBoard'):history.push('stuDashBoard')
            }
            else{
                msg.textContent="wrong password there buddy"
            }
            }
            
        catch(error){console.log(error)}
    }
    
    return (
            <Box sx={{
                    height:"100vh",
                    width:"100vw",
                    background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 6%)",
                    color: 'white',
                    bg: 'gray',
                    overflow:'hidden',
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontFamily:"Sansita Swashed"
                }} >
                    
                <Card
                    as='form'
                
                    sx={{
                        width:"25vw",
                        height:"40vh",
                        background:"rgba(131,22,219,0.3)",
                        boxShadow:'0 0 2em rgba(0, 0, 0, .8)',
                        borderRadius:"2em",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        
                }}
                >
                
                    <Text 
                            htmlFor='name' 
                            fontSize={[ 3, 4, 5 ]}
                            fontWeight={"bold"}
                            marginRight={".2em"}
                            color={"black"}>
                            Sign In
                    </Text>
                    <Flex  flexDirection={"column"} 
                                    sx={{
                                        height:"40vh",
                                        paddingLeft:".5em",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"unset",}}>
                        <Label width={"15vw"} color={"black"}>
                            Staff? <Checkbox value="red" defaultChecked="true" onClick={e=>setStaff(!isStaff)} /> 
                        </Label>
                        <Label htmlFor='name' color={"black"} paddingBottom={".4em"}>{isStaff?"Staff ID":"USN"}</Label>
                        <Input  id='usn'    name='usn'   color={"black"} paddingBottom={".6em"}  type="text"     defaultValue=''/>
                        <Label htmlFor='name' color={"black"} paddingBottom={".4em"} >Password</Label>
                        <Input  id='pwd'    type="password" color={"black"} paddingBottom={".4em"}   onKeyUp={enter}   />
                        <Box id="message" ref={el=>msg = el} sx={{color:"red", fontFamily:"Sansita Swashed"}}></Box>
                        <Box name={"buttons"} 
                            p={".4em"}
                            sx={{
                            display:"flex",
                            flexDirection:"row",
                            alignItems:"unset",
                            justifyContent:"unset"
                        }}>
                            <Button onClick={SignInVerify} 
                                    type={"button"}
                                    color={"black"}
                                    sx={{
                                    height:"3em",
                                    fontFamily:"Sansita Swashed",
                                    flexDirection:"rows",
                                    textAlign:"center",
                                    background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,
                                    border:"2px solid black",
                                    borderRadius:".7em" }}
                                    mr={".9em"} >
                                        SUBMIT
                            </Button>
                            <Link       href="/signUp"
                                        type={"button"}
                                        color={"black"}
                                        sx={{
                                            height:"3em",
                                            width:"6em",
                                            background:" linear-gradient(215deg, rgba(41,21,227,1) 27%, rgba(131,22,219,0.9612045501794468) 76%)" ,
                                            border:"2px solid black",
                                            textDecoration:"none",
                                            color:"white",
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center",
                                            borderRadius:".7em"
                                            }} >
                                            Sign Up?
                            </Link>
                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}

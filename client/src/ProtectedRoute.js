import React ,{useContext}from 'react'
import {MyContext} from './context/context'
import { Route, Redirect } from "react-router-dom";
export default function ProtectedRoute({component:Component,...rest}) {
    const {isVerified} = useContext(MyContext)
    // useEffect(()=>{ console.log("value got updated") },[isVerified])
    // console.log({...rest})
    return (
        <Route {...rest} render={(props)=> isVerified?<Component {...props}/>:<Redirect to='/signIn' />}/>
    )

    
}

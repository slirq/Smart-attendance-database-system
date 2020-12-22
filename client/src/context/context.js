import React,{useState,createContext} from 'react'
const MyContext = createContext();
const UserContext=props=>{
    const [isVerified,setVerified] = useState(0);
    const [isCreated,setCreated] = useState(false);
    const [uniqueID,setUniqueID] = useState("")
    return(
        <MyContext.Provider value={{isVerified,setVerified,isCreated,setCreated,uniqueID,setUniqueID}}>
            {props.children}
        </MyContext.Provider>
    );
};
export{MyContext,UserContext};

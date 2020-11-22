import React,{useState,createContext} from 'react'
const MyContext = createContext();
const UserContext=props=>{
    const [isVerified,setVerified] = useState(0);
    return(
        <MyContext.Provider value={{isVerified,setVerified}}>
            {props.children}
        </MyContext.Provider>
    );
};
export{MyContext,UserContext};

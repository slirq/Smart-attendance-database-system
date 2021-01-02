import React from 'react'
export default function Name({name,styleProp}) {
    return (
        <div >
            <h2 style={styleProp===undefined?{color:"black",fontSize:"3.5em"}:styleProp}>
                {`${name}`}
            </h2>
        </div>
    )
}

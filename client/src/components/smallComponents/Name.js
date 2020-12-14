import React from 'react'
import { Text,Box,Heading} from 'rebass'

export default function Name({name}) {
    return (
        <Box sx={{ display: 'grid',  gridGap: 1,gridTemplateColumns: 'repeat(auto-fit, minmax(1vh, 1fr))'}}>
            <Heading p={3} bg='muted'>
                <Text htmlFor='name' fontSize={[ 3, 4, 8 ]} fontWeight={"bold"}   marginRight={".2em"}
                        color={"black"}>
                    {`${name}`}
                </Text>
            </Heading>
        </Box>
    )
}

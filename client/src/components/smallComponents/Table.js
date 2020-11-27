import React from 'react'
import { Text,Box,Card,Button, Flex,Link,Heading} from 'rebass'
export default function Table({ columns, data }) {


    return (
        
            <Box width={[1, 3 / 4, 2 / 2]}>
              <Flex flexWrap="wrap">
                {data.map((item, index) => {
                  return (
                    <Box px={2} width={1 / columns}>
                      <Text 
                        p={2}
                        justifyContent="center"
                        alignItems="center"
                        marginLeft='6vh'
                        style={{
                          fontWeight: index < columns ? "bold" : "normal" 
                        }}
                      >
                        {item}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          
    )
}
import React from 'react'
import { Text,Box, Flex} from 'rebass'
export default function Table({ columns, data,uniStr }) {
    return (   
            <>
              <Flex className="Table" flexWrap="wrap">
                {data.map((item, index) => {
                  return (
                    <Box  key={`${uniStr}-${index}`} width={1 / columns} >
                      <Text className="kaBaccha"
                        key={`${uniStr}-${index+1000}`}
                        style={{fontWeight:"bold" }}>
                        {item}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            </>
          
    )
}

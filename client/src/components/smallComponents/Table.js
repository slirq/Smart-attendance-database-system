import React from 'react'
import { Text,Box, Flex} from 'rebass'
export default function Table({ columns, data,uniStr }) {
    return (   
            <Box className="Table" width={[1, 3 / 4, 2 / 2]} >
              <Flex flexWrap="wrap">
                {data.map((item, index) => {
                  return (
                    <Box  key={`${uniStr}-${index}`} width={1 / columns} >
                      <Text className="kaBaccha"
                        key={`${uniStr}-${index+1000}`}
                        style={{fontWeight: index < columns ? "bold" : "normal" ,}}>
                        {item}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          
    )
}

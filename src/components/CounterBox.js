import React from "react";
import { Flex ,Text} from "@chakra-ui/react";

function CounterBox({number,text}){
    return(
        <Flex 
      backgroundColor={'#413c69'}
      fontSize={50}
      fontWeight={700}
      color={'#dcd6f7'}
      borderRadius={15}
      w={160}
      h={160}
      m='10px'
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      >
        <Text
        fontSize={50}
        color={'#dcd6f7'}
        m={0}
        >
{number}
        </Text>
        
        <Text
        fontSize={30}
        color={'#a6b1e1'}
        m={0}
        >
          {text}
        </Text>
      </Flex>
      
    )
}

export default CounterBox;

/**
 * 
 * 
 * background-color: #413c69;
  font-size: 50px;
  font-weight: 700;
  color: #dcd6f7;
  border-radius: 15px;
  width: 160px;
  height: 160px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
 */
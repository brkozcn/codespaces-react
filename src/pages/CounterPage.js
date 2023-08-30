import React from "react";
import Counter from "../components/Counter";
import SignInButton from "../components/SignInButton";
import { Flex } from "@chakra-ui/react";

function CounterPage() {
    return(
        <Flex 
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        flexDirection={'column'}
        w='100%'
        h='100vh'
        backgroundColor={'gray.800'}
        >
            <Counter/>
            <SignInButton/>
        </Flex>
    )
}

export default CounterPage;

/**
 * 
 * width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  color={'gray.800'}
 */
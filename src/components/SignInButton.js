import React from "react";
import { Button, Flex, ButtonGroup} from "@chakra-ui/react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


function SignInButton() {
    return(

<Flex>


<Flex  >
            <Link to="counter">
                <Button
                width={300} 
                height={10} 
                marginTop={30}
                borderRadius={5}
                fontSize={18}
                fontWeight={700}
                variant={'outline'}
                background="transparent"
                color={'whiteAlpha.900'}
                colorScheme='whiteAlpha'
                >
                GİRİŞ YAP
                </Button>
            </Link>
        </Flex>

        



        



        


</Flex>

        

        
    )
}



export default SignInButton;


/**
 * 
 * 
 * 
 * width: 300px;
  height: 40px;
  margin-top: 20px;
  outline: none;
  border: 1px rgba(255, 255, 255, 0.2) solid;
  background-color: transparent;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.719);
  font-size: 18px;
  font-weight: 700;


  <Flex  >
            <Link to="counter">
                <Button
                //width={300} 
                //height={40} 
                //marginTop={30}
                //backgroundColor={'red'}
                //borderRadius={5}
                //fontSize={18}
                //fontWeight={700}
                //borderColor={'red'}
                background="transparent"
                >
                <Flex> 
                    GİRİŞ YAP
                </Flex>
                </Button>
            </Link>
        </Flex>
 


 */
import React from "react";
import { Button } from "@chakra-ui/react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function SignInButton() {
    return(
        <div >
            

            <Link to="counter">
                <Button 
            
            width={300} 
            height={40} 
            marginTop={20}
            outline={'none'}
            backgroundColor={'transparent'}
            borderRadius={5}
            fontSize={18}
            fontWeight={700}

            
            >
                giriş yap
            </Button>
            </Link>
        </div>
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


 */
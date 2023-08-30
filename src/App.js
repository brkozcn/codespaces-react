import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Counter from "./components/Counter";
import SignInButton from "./components/SignInButton"


import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import CounterPage from "./pages/CounterPage";
import CounterBox from "./components/CounterBox";

function App(){
    return(
      <ChakraProvider>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/counter" element={<Counter />} />
      
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    )
}

export default App;


/**
 * 
 * 
 * 
 */
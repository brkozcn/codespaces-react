import React from "react";
import Counter from "./components/Counter";
import SignInButton from "./components/SignInButton"

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import CounterPage from "./pages/CounterPage";

function App(){
    return(
        <div>
          <CounterPage/>
        </div>
    )
}

export default App;


/**
 * 
 * 
 * <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInButton />} />
        <Route path="/counter" element={<Counter />} />
      
      </Routes>
    </BrowserRouter>
 */
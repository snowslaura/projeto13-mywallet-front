import { React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn.jsx";
import SignUp from "./SingUp.jsx";
import Home from "./Home.jsx";
import Income from "./Income.jsx";
import Outcome from "./Outcome.jsx";

import userDataContext from "./../contexts/userDataContext.jsx";

function App(){

    const[userData, setUserData] = useState({})
    

    return(
        <BrowserRouter>
            <userDataContext.Provider value={{userData, setUserData}}>
                    <Routes>
                        <Route path="/" element={<SignIn/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/income" element={<Income/>}/>                        
                        <Route path="/outcome" element={<Outcome/>}/>
                    </Routes>  
            </userDataContext.Provider>                      
        </BrowserRouter>          
    )
}
export default App;
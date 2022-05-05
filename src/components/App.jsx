import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn.jsx";
import SignUp from "./SingUp.jsx";
import Home from "./Home.jsx";
import Income from "./Income.jsx";
import Outcome from "./Outcome.jsx";

function App(){
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<SignIn/>}/>
               <Route path="/sign-up" element={<SignUp/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/income" element={<Income/>}/>
               <Route path="/outcome" element={<Outcome/>}/>
            </Routes>            
        </BrowserRouter>          
    )
}
export default App;
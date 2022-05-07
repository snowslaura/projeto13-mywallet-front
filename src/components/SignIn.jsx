import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
 import {useContext} from "react";
 import axios from "axios"

import userDataContext from "./../contexts/userDataContext";


function SignIn(){ 
    const {userData, setUserData} = useContext(userDataContext)

    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();
        console.log("TON NO LOGIN")
        const body = {
            email:userData.email,
            password:userData.password
        }

        const promise = axios.post(process.env.REACT_APP_API_URL, body)
        promise.then(({data})=>{
            console.log("DATA LOGIN: ", data)
            setUserData({...userData, token:data})
            navigate("/home")
        })

        promise.catch((e)=>{
            setUserData({...userData,email:"", password:"" , token:""})
            alert("Login ou senha inválidos")
        })    
    }
    console.log(userData)
    return (
        <Container> 
            <form onSubmit={handleLogin}>
                <Logo>MyWallet</Logo>
                <input type="email" id="email" value={userData.email} placeholder="E-mail" onChange={(e)=>setUserData({...userData, email:e.target.value})} />
                <input type="password" id="password" value={userData.password} placeholder="Senha" onChange={(e)=>setUserData({...userData, password:e.target.value})} />
                <button type="submit">Entrar</button> 
                <Link to="/sign-up"><Enter>Primeira vez? Cadastre-se!</Enter></Link>
            </form>           
        </Container>
	)
}

export default SignIn; 

const Logo = styled.p`
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-top: 150px; 
    margin-bottom: 20px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;   

   form{
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;          
    }

   input{ 
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 13px;
        ::placeholder {
                        color:#000000;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 23px;
                        padding: 10px;
                    };  
    }

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        margin-top: 13px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        border:none;
    }
`
const Enter = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 36px;
`




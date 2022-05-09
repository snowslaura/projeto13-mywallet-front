import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react"
import axios from "axios"

import userDataContext from "./../contexts/userDataContext";

function SignUp(){
    const{userData, setUserData} = useContext(userDataContext)

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()

        const body ={
            name: userData.name,
            email:userData.email,
            password:userData.password,
            confirmation:userData.confirmation
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
        promise.then(()=>{
            setUserData({...userData,name:"", email:"", password:"", confirm:""});
            setUserData({...userData,email: ""});
            setUserData({...userData, password:""});            
            navigate("/");

        })
        promise.catch((e) => {
            setUserData({...userData,name:"", email:"", password:"", confirm:""});
            alert("Dados inválidos");
        })
    }
    return(
    <Container> 
        <form onSubmit={handleSubmit}>
            <Logo>MyWallet</Logo>
            <input type="text" id="name" placeholder="Nome" value={userData.name} onChange={(e)=> setUserData({...userData, name: e.target.value})} />
            <input type="email" id="email" placeholder="E-mail" value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
            <input type="password" id="password" placeholder="Senha" value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})} />
            <input type="password" id="confirmation" placeholder="Confirme a senha" value={userData.confirmation} onChange={(e)=> setUserData({...userData, confirmation:e.target.value})} />
            <button type="submit">Registrar</button>
            <Link to="/"><Enter>Já tem uma conta? Entre agora!</Enter></Link>
        </form>           
    </Container>

    )
}
export default SignUp;

const Logo = styled.p`
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-top: 60px; 
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
        margin-bottom: 13px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        padding: 10px;
        color: #000000;  
        ::placeholder {
                        color:#000000;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 23px;
                    };      
    }

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
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
    margin-top: 30px;;
`




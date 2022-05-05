import styled from "styled-components"
import { Link } from "react-router-dom";

function SignUp(){
    return(
    <Container> 
        <form>
            <Logo>MyWallet</Logo>
            <input type="text"  placeholder="Nome" />
            <input type="email"  placeholder="E-mail" />
            <input type="password" placeholder="Senha"/>
            <input type="password" placeholder="Confirme a senha"/>
            <Link to="/"><button type="submit">Registrar</button> </Link>
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




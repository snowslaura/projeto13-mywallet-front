import styled from "styled-components"
import { Link } from "react-router-dom";

function Outcome(){
    return(        
        <Container>
            <div>
                <Header>
                    <Name>Nova saída</Name>
                </Header>  
                <form>
                    <input type="value"  placeholder="Valor"  />
                    <input type="text"  placeholder="Descrição" />
                    <Link to="/home"><button type="submit">Salvar entrada</button></Link>
                </form> 
            </div>                     
        </Container>        
    )
}

export default Outcome;

const Container = styled.div` 
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;

   form{
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center; 
        margin-top: 20px;             
    }

   input{ 
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 3%;
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
        margin-top: 3%;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        border:none;
    }
`
const Header = styled.div`
    width: 326px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    margin-top: 0;
    margin-bottom: 0;
    height: 60px;    
`

const Name = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`




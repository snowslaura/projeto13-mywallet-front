import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"



function IncomeEdit(){

    const[editIncome, setEditIncome]= useState({})
    const navigate = useNavigate();

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token
    
    function handleEdition(event){
        event.preventDefault();
        const body = {
            amount: editIncome.amount,
            description: editIncome.description,
            type:"income"
        }     


        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/home:id`, body, config)
        promise.then(()=>{
            setEditIncome({});
            navigate("/home");
        })
        promise.catch((e)=>{
            console.log(e)
        })
    }
     

    return(
        <Container> 
            <div>
                <Header>
                    <Name>Editar entrada</Name>
                </Header>  
                <form onSubmit={handleEdition}>
                    <input type="number" id="amount" maxLength="6" value={editIncome.amount} placeholder="Valor" onChange={(e)=> setEditIncome({...editIncome, amount: e.target.value})}/>
                    <input type="text" id="description" value={editIncome.description} placeholder="Descrição" onChange={(e)=> setEditIncome({...editIncome, description: e.target.value})} />
                    <button type="submit">Atualizar entrada</button>
                </form> 
            </div>                      
        </Container>
    )
}

export default IncomeEdit;

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
        margin-top: 13px;
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
        margin-top: 13px;
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





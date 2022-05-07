import styled from "styled-components"
import {Link} from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import axios from "axios"

import Balance from "./Balance";

import userDataContext from "./../contexts/userDataContext";
 

function Home(){
    const{userData} = useContext(userDataContext)    

    const[balance, setBalance] = useState([])
    console.log("USER: ", userData)
    useEffect(() => fetchBalance() ,[])

    function fetchBalance(){
        console.log("Token: ", userData.token)
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, config)
        promise.then(({data})=>{
            console.log("DATA: ", data)
            setBalance(data)
        }) 
    }
   
    console.log("Balance: ", balance)
    return(
        <Container>
            <Header>
                <Name>Olá, {userData.name}</Name>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>  
            <Content>                
                    {!balance?
                    <div><span>Não há registros de</span><span>entrada ou saída</span></div>:
                    balance.map((balance)=>{
                        return(
                        <Balance 
                        key={balance.id}
                        {...balance}
                        ></Balance>)
                    })
                    }                
            </Content>
            <Movements>
                <Income>
                    <Link to="/income"><ion-icon name="add-circle-outline"></ion-icon></Link>
                    <div>
                        <span>Nova</span><span>entrada</span>
                    </div>
                </Income>        
                <Outcome>
                    <Link to="/outcome"><ion-icon name="remove-circle-outline"></ion-icon></Link>                    
                    <div>
                        <span>Nova</span><span>Saída</span>
                    </div>                
                </Outcome> 
            </Movements>          
        </Container>       
    )
}

export default Home;
const Container = styled.div` 
     
    display:flex;
    flex-direction: column;
    align-items: center;
   

    ion-icon{
        color: #FFFFFF;
        font-size: 30px;
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

const Content = styled.div`
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    span{
        display:block;        
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;

    }
`

const Movements = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 13px;
    justify-content: space-between;
    width: 326px;
`
const Income = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    ion-icon{
        margin-left: 10px;
        margin-top: 10px;
    }

    div{
        margin-left: 10px;
        margin-bottom: 10px;
    }
    
    span{
        display: block;
        display: block; 
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;      
    }
`

const Outcome = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ion-icon{
        margin-left: 10px;
        margin-top: 10px;
    }
    div{
        margin-left: 10px;
        margin-bottom: 10px;
    }
    
    span{
        display: block; 
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;       
    }
`
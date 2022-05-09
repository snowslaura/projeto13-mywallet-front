import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios"

import Balance from "./Balance"; 

function Home(){

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token
    const nameStorage = unserializedData.name

    const[balance, setBalance] = useState([]);
    const[total, setTotal] = useState(0);
    const[positive,setPositive]=useState(true)

    const navigate = useNavigate()

    useEffect(() => fetchBalance() ,[])

    function fetchBalance(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, config)
        promise.then(({data})=>{
            setBalance(data)
            calculateTotal(data);            
        })
        promise.catch((e)=>{
            console.log(e)
        })
    }



    function handleLogOut(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }

        const body = {};

        const promise = axios.put(`${process.env.REACT_APP_API_URL}/home`, body, config)
        promise.then(()=>{
            navigate("/")
        })
        promise.catch((e)=>{
            console.log(e)
        })
    }

    function calculateTotal(balance){
        const totalAmount = balance?.map((element)=> {
            if(element.type === "income"){
                return +element.amount
            }else if(element.type === "outcome"){
                return -element.amount
            }
        })
        
        if(totalAmount.length!==0){
            const calc = totalAmount?.reduce(sum)
            if(calc>0)setPositive(true)
            else setPositive(false) 
            setTotal(calc)   
        }      
        
    }

    function sum(total,num){
       return total + num      
    }

    const editedTotal = parseInt(total).toFixed(2)
    const totalEdited = editedTotal.toString().replace(".", ",")
   
    return(
        <Container>
            <Header>
                <Name>Olá, {nameStorage}</Name>
                <ion-icon onClick={handleLogOut} name="log-out-outline"></ion-icon>
            </Header>  
            <Content>
                    <Data>
                        {balance.length===0?
                        <Message balance={balance}><span>Não há registros de</span><span>entrada ou saída</span></Message>:
                        balance.map((balance)=>{
                            return(
                            <Balance key={balance.id} {...balance}></Balance>)})
                        }
                    </Data>            
                     
                    {balance.length===0?"":
                    <Total><div><p>SALDO</p><FinalTotal positive={positive}>{totalEdited}</FinalTotal></div></Total>}
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

    ion-icon{
        color: #fff;
        font-size: 30px;
    }
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
    flex-direction:column;    

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
const Data = styled.div`
    height: 93%;
    width: 100%;
    display:flex;
    flex-direction: column;
    overflow-y: scroll;

`
const Message = styled.div`
    margin-top: ${props => props.balance.length===0?"200px":"0"};
`

const Total = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    width:100%;    
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div{
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
        width: 95%;
    }
`

const FinalTotal= styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color:${props => props.positive===true?"#8FC549":"#C70000"}
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
        color: #fff;
        font-size: 30px;
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
        color: #fff;
        font-size: 30px;
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
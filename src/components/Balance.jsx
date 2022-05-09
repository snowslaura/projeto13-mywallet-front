import styled from "styled-components"

function Balance({date, type, amount, description}){  
    const editedAmount = parseInt(amount).toFixed(2)
    const amountEdited = editedAmount.toString().replace(".", ",")
    
    return(
        <>  
            <Movement >
                <Left>
                    <Date>{date}</Date>
                    <Description>{description}</Description> 
                </Left>
                <Rigth>
                    <Amount type={type}>{amountEdited}</Amount>                       
                    <ion-icon name="close-outline"></ion-icon>
                </Rigth>             
            </Movement>
        </>
    )
}

export default Balance;


const Movement = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    margin-top: 20px;  
`

const Left = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    margin-left: 10px;
`

const Rigth = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 40%;
    margin-right: 10px;

    ion-icon{
            font-weight: 400;
            font-size: 16px;    
            color: #C6C6C6;
            margin-left: 5px;
        }
`

const Date = styled.div`
    display:flex;
    flex-direction:row;  
    align-items:center;
    margin-right: 20px; 
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;   
`

const Description = styled.div`
    display:flex;
    flex-direction:row;
    word-break: break-word;
`

const Amount= styled.div`
    display:flex;
    flex-direction:row;
    margin-left: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;    
    color: ${props => props.type==="income"?"#8FC549":"#C70000"}
    
`

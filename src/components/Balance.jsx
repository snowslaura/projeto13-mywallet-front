
function Balance({date, type, amount, description}){
  
    
    return(
        <div>
            <span>{type}</span>        
            <span>{date}</span>
            <span>{description}</span>
            <span>{amount}</span>                
        </div>
    )
}

export default Balance;
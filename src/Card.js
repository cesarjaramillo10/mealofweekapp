import React from "react";

function Card({dia,comida,delet,modalfun,setday}){
    
    return( 
        <div className="Card">
            <h3> {dia} </h3>
            <div className="card__comida">
                {comida}
            </div>
            <div className="card__button">
                {comida ? <span className="delete" onClick={()=>{delet(dia,comida)}}>✕</span> : <span className="add" onClick={()=>{modalfun(true); setday(dia)}}>✛</span>}
                
            </div>
        </div>
    );
}

export {Card};
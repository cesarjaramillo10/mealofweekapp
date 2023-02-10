import React from "react";


function MainTarjetas(props){
    return(
        <div className="mainCardContainer">
            {props.children}
        </div>
    );
        
    
}

export {MainTarjetas};
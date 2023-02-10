import React from "react";

function IntoModal({modalcl,diaaa,funadd}){
   let [addItem,setAddItem]=React.useState("");
   function textoNuevo(textico){
    setAddItem(textico);
   }
  
    return(
        <>
        <span className="exitmodal" onClick={()=>{modalcl(false)}}>✕</span>
        <div className="cajaform">
            <textarea placeholder="Sopa de Pollo" onChange={(texto)=>{textoNuevo(texto.target.value)}}></textarea>
            <button className="addbot" onClick={()=>{funadd(diaaa,addItem);modalcl(false)}}>Agregar</button>
        </div>
        </>
    );
}

export {IntoModal};
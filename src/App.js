import logo from "./logo.svg";
import "./App.css";
import { HeaderWeb } from "./Header";
import { MainTarjetas } from "./MainTarjetas";
import { Card } from "./Card";
import React from "react";
import imagee from "./mfodd.png";
import { IntoModal } from "./IntoModal";
const menu = [
  { dia: "Lunes", comida: "papa" },
  { dia: "Martes", comida: "frijoles con carra apellido tajadas" },
  { dia: "Miercoles", comida: "sudao" },
  { dia: "Jueves", comida: "coliflor" },
  { dia: "Viernes", comida: "ensalada" },
  { dia: "Sabado", comida: "burrito" },
  { dia: "Domingo", comida: "nachos con queso" },
];
const plantilla = [
  { dia: "Lunes", comida: "" },
  { dia: "Martes", comida: "" },
  { dia: "Miercoles", comida: "" },
  { dia: "Jueves", comida: "" },
  { dia: "Viernes", comida: "" },
  { dia: "Sabado", comida: "" },
  { dia: "Domingo", comida: "" },
];
function App() {
  const [modall, setModal] = React.useState(false);
  const [diaa, setDia] = React.useState(false);
  
  const itmesLocalStorage = localStorage.getItem("VALORES_V1");
  let todosItmesLocal = plantilla;

  if (itmesLocalStorage) {
    todosItmesLocal = JSON.parse(localStorage.getItem("VALORES_V1"));
  } else {
    localStorage.setItem("VALORES_V1", JSON.stringify(todosItmesLocal));
  }
  const [valores, SetValores] = React.useState(todosItmesLocal);

  function quitarlocal(todo) {
    // console.log(todo);
    localStorage.setItem("VALORES_V1", JSON.stringify(todo));
    SetValores(todo);
  }

  function deleteItems(diaa, comidita) {
    let copyitems = [...valores];
    let indexe = copyitems.findIndex((rank) => rank.dia === diaa);
    copyitems[indexe].comida = "";
    quitarlocal(copyitems);
  }

  function addNewItem(diasemana,comidagregar){
    let copiarnuevo=[...valores];
    let index1 = copiarnuevo.findIndex((rank1) => rank1.dia === diasemana);
    copiarnuevo[index1].comida=comidagregar;
    quitarlocal(copiarnuevo);
  }
  return (
    <>
      <div className="principal">
        <HeaderWeb />
        <MainTarjetas>
          {valores.map((datos) => {
            return (
              <Card
                key={datos.dia}
                dia={datos.dia}
                comida={datos.comida}
                delet={deleteItems}
                modalfun={setModal}
                setday={setDia}
              ></Card>
            );
          })}
        </MainTarjetas>
      </div>
      <div className="divplato">
        <img src={imagee} className="imadish"></img>
      </div>
      {modall ? <div className="modal"> <IntoModal modalcl={setModal} diaaa={diaa} funadd={addNewItem}/></div> : console.log("")}
    </>
  );
}

export default App;

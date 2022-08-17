import React from "react";
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
    <div className='boton-clear'
    onClick={props.manejarClear}> {/* en este caso no es necesaio crear un afuncion igual que boton js porque ya definimos uns funcion en app.js en el componente botonclear */}
      {props.children}
    </div>
  );
  export default BotonClear;

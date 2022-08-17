import React from "react";
import '../hojas-de-estilo/Pantalla.css';

/*/ es una forma nueva de crear un componente pero d eigual manera funciona en este caso es una funcion flecha, y ya no se utiliza function */

const Pantalla = ({input})=> (
  <div className='input'>
    {input}


  </div>
);
export default Pantalla;
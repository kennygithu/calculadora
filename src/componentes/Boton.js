import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props){
    const esOperador= valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');

    };
    return(
        <div className={`boton-contenedor ${esOperador(props.children)? 'operador':null}`} /*las comillas invertidas nos sirve para crear un cadena de caracteres de codigo java script y este caso estasmo asignando un nombre si cierta condicion se cumple esto es para css de boton.css*/
            onClick={() => props.manejarClic(props.children)}>  {/*es una funcion flecha para pasar el valor del boton a manejar clic y este pasara a input de la pantalla*/}
            {props.children} {/*los props . children sirve para asignar el texto que pusimos dentro de la etiqueta de app.js sin la necesidad de un variable  */}
        </div>


    );

    
}

export default Boton;
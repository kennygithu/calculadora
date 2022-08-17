//import logo from './logo.svg';
import './App.css';
import logoWalleworld from './imagenes/logowa.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react'; /* imprtatando u hook*/
import {evaluate} from 'mathjs';  /*sirve para transforma una cadena de caracteres una exprsion matematica*/
function App() {

  /*creando un estado(hook) para la aplicacion esto hace que el dato que reciba input le pase al componente pantalla*/
   const [input, setInput]=useState('Presione clear');


   /*funcion agregar input*/

   const agregarInput  = val =>{
      setInput(input + val);
   };
    /*una funcion para evaluar input y convertirlo en uan expresion matematica*/

    const calcularResultado =() => {
      if (input){
        setInput(evaluate(input));
      }else{
        alert('Ingrese valores a calcular');
      }
      
    };
      
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logowa'
          src={logoWalleworld}
          alt='logo de walleworld'/>
      </div>
      <div className='contenedor-calculadora'>
        
         <Pantalla input={input} />
         
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
          </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> {/*definicmo una funcion manejarclear donde devolvera un estado vacio / */}
            Clear
            </BotonClear>
        </div>
           
      </div>
    </div>
  );
}

export default App;

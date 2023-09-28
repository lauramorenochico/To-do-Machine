import React from 'react';
//import './TodosError.css';

function TodosError() {

  return (
 <p>Parece que algo se ha roto</p>
  );
}

//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodosError};
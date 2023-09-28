import React from 'react';
import './TodosNull.css';

function TodosNull() {

  return (
 <p className='text'>No tienes ninguna quest activa</p>
  );
}

//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodosNull};
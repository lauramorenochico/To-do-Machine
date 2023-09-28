import React from 'react';
import './TodosLoading.css';

function TodosLoading() {

  return (
  <>
    <p className='text'>Rebuscando en el baúl...</p>
    
    <section className="section-loading">
    <div className="load"></div>
    </section>
  
</>
  );
}

//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodosLoading};


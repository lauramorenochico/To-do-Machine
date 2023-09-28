import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';


function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } =React.useContext(TodoContext)
  return (
        
        <>
          <h1 className="title">Mis tareas</h1>
          <h2 className="counter">Completadas <span>{completedTodos}</span> de <span>{totalTodos}</span> </h2>
        </>
      
     );
}
//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodoCounter};

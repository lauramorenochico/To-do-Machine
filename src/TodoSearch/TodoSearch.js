import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
const {
setSearchValue,
searchValue,
}= React.useContext(TodoContext);
  return (
 <div className="container">
   <div className="container-group">
    <input
      placeholder="Comprar el pan"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value); /*se guarda lo que los usuarios hayan escrito en el nuevo estado*/
        
      }}
    />
    <i className="fa-solid fa-magnifying-glass"></i>
   </div>
 </div>

  );
}

//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodoSearch};


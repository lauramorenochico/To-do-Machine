import React from 'react';
import {TodoProvider} from '../TodoContext/TodoContext';
import { AppUI } from './UI';



/*const defaultTodos = [
  {text:'Leer "Esperando al diluvio"', completed: false},
  {text: 'Visitar un sitio nuevo', completed: true},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Achuchar a las michis', completed: true},
  {text: 'Bailar sin parar', completed: false},
  {text: 'Cantar como una loca', completed: true},
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem ('TODOS_V1')*/



function App() {
//se ha movido toda el contenido para usar React Context (TodoContext)
return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
  );
}
  export default App;

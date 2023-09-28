//Context permite compartir datos  de forma directa entre componentes de diferente nivel evitando el "props drilling"

import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {
    //aqui se puede encapsular la lógica de la aplicación. se arrastra todo el contenido de function App() en App.js
   const [openModal, setOpenModal] =React.useState (false); 
    
   const [searchValue, setSearchValue] =React.useState ('');
   const {
    item : todos, //sintaxis para renombrar :
    saveItem :saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []); //eliminamos el setTodos y lo cambiamos por saveTodos, al exportarlo como Array nos permite renombrar los elementos, así que no hace falta tampoco que pongamos un saveItem, podemos directamente nombrarlo saveTodos de la funcion que se ha movido a useLocalStorage y antes se llamana saveTodos y cambiamos por saveItem
   

   const completedTodos = todos.filter(
    todo => !!todo.completed).length; //doble negación para convertirlo en un valor booleano de verdadero o falso
   const totalTodos = todos.length;

    const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  
  const addTodo =(text)=>{
    const newTodos= [...todos]; //copia del estado del array de todos
    newTodos.push({
      text,
      completed: false, //para que esté pendiente de cpmpletar
    });
    saveTodos(newTodos);
  }

  //las funciones doneTodo y deleteTodo sólo modifican el estado pero no el local storage.
  const doneTodo =(text)=> {
    const newTodos= [...todos]; //copia del estado del array de todos
    const todoIndex= newTodos.findIndex((todo) =>todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;//quiero que se pueda hacer y deshacer la tarea
    saveTodos(newTodos);
  };

  const deleteTodo =(text)=> {
    const newTodos= [...todos]; 
    const todoIndex= newTodos.findIndex((todo) =>todo.text === text);
    newTodos.splice(todoIndex, 1); //sólo queremos quitar 1
    saveTodos(newTodos);
  };
   console.log('Los usuarios buscan todos de ' + searchValue); //works!!

    return (
       <TodoContext.Provider value ={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        doneTodo,
        deleteTodo,
        setOpenModal,
        openModal,
        addTodo,
       }}> {/*value={todo lo que queremos exponer globalmente en el contexto de nuestra aplicación}*/} 
        {children}
       </TodoContext.Provider> 
    );
}



export  {TodoContext, TodoProvider};
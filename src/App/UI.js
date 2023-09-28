//muy habitual es separar los componentes de la interfaz
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import {TodoButton } from '../TodoButton/TodoButton';
import {TodosLoading} from '../TodosLoading/TodosLoading';
import {TodosError} from '../TodosError/TodosError';
import {TodosNull} from '../TodosNull/TodosNull';
import { TodoContext } from '../TodoContext/TodoContext';
import {Modal} from '../Modal/Modal';
import {TodoForm} from '../TodoForm/TodoForm';

function AppUI() {
  const {
        loading,
        error,
        searchedTodos,
        doneTodo,
        deleteTodo,
        openModal,
        setOpenModal,
}= React.useContext(TodoContext);
    return(
    <>
      <TodoCounter/>
      <TodoSearch/>
          
       <TodoList>
       {loading && <TodosLoading/>}
       {error && <TodosError/>}
       {(!loading && searchedTodos.length ===0) && <TodosNull/>} {/*si terminamos de cargar y no hay To dos*/} 
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => doneTodo(todo.text)}//encapsulamos nuestra función en otra función, para poder ejecutar la primera y que react no rompa todo
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <TodoButton 
      setOpenModal={setOpenModal}/>

      {openModal && ( //estado para abrirlo o cerralo
      <Modal>{/*se usan portales para su funcionalidad*/}
          <TodoForm/>
      </Modal>
      )}
    </>
    )

}

export {AppUI};
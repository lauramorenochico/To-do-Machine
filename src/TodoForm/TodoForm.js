import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";
import { FcIdea } from "react-icons/fc";

function TodoForm() {
  const {
    setOpenModal,
    addTodo, //para guardar en el estado y en el local storage
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <FcIdea className="icon"/>
      <label>Escribe la nueva tarea</label>
      <textarea
        placeholder="Ej.: Cortar cebolla"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="containerBtn">
        <button type="button" className="canceladdBtn" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="canceladdBtn">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

import './TodoList.css';

function TodoList({ children }) {
  return (
    <ul className="TodoList">
      {children}
    </ul>
  );
}
//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodoList};
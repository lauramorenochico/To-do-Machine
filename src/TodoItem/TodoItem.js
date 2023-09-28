import './TodoItem.css';
import { FiCheckCircle } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";


function TodoItem (props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FiCheckCircle/>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FiDelete/>
      </span>
    </li>
  );
}
export { TodoItem };



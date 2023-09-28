import './TodoButton.css';

function TodoButton ({setOpenModal}){
return(
<button className="CreateBtn"
onClick={()=>{
    setOpenModal (state => !state) //enviamos evento una función con un actualización de estado, esto significa que si state es true, se volverá false, y si state es false, se volverá true.Cuando el elemento con onClick se hace clic, esta función se ejecutará y cambiará el estado de setOpenModal al estado opuesto al que tenía antes
}}>
Añadir tarea
</button>
);
}
//export nombrados, no por default, exportar un objeto que dentro tenga el componente que yo quiero exportar, pueden evitar errores al exportarlos al App.js
export {TodoButton};
import React from 'react';

//custom hooks. la idea es agrupar todo lo que tenga que ver con local storage aqui
 function useLocalStorage(itemName, inictialValue) {
 const [item, setItem] = React.useState(inictialValue);
 const [loading, setLoading] = React.useState(true);//estado de carga
 const [error, setError] = React.useState(false); //estado de error. falso de estado inicial porque no hay alarmar sin necesidad
  

  //simulación de demora de carga del local storage
  React.useEffect(() =>{
    setTimeout(() =>{
    try{
      const localstorageItem=localStorage.getItem (itemName);

    let parsedItem;

    //condicional para que si el local storage está vacío no se rompa. si no hay localStorageItem entonces parsedItem y localStorage es igual a un array vacío, (este último hay que convertirlo en string)
    if (!localstorageItem){
    localStorage.setItem (itemName, JSON.stringify(inictialValue));
    parsedItem = [inictialValue];
    } else {
    parsedItem = JSON.parse(localstorageItem);
    setItem(parsedItem)
    }
    setLoading(false);
  }catch(error){
    setLoading(false);
    setError(true);
  }
    },3000);
}, []);
  
  
 // nueva función saveTodos modifica el estado y el local storage, le cambiamos el nombre por saveItem, porque en el local storage todo se identifica con item
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify (newItem));
    setItem(newItem)
  };
  return {
    item, 
    saveItem, 
    loading, 
    error}; 
    //¿qué quiero utilizar dentro de App?. si tenemos más de 2 elementos que retornar se hace como objeto y no como array
 }

 export { useLocalStorage };
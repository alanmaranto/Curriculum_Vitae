import { useState, useEffect } from 'react'; //importamos funcions hooks de la libreria de react

 //api generada en otro curso a traves de firebase

//funcion que actualiza nuestro estado: mydata es el estado; setData es la funcion que actualiza nuestro estado
const useGetData = (url) => {
    const [mydata, setData] = useState([]);
    
    useEffect(() => { //se encarga de hacer la peticion en fetch
        fetch(url)
            .then(response => response.json())
            .then(data =>setData(data))
    }, []);

    return mydata; //retornamos lo que la peticion resuelva
}

export default useGetData;

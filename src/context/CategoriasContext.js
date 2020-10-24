import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const CategoriasContext = createContext();

// Crear el provider
const CategoriasProvider = (props) =>{
    
    const [ categorias, guardarCategorias ] = useState([]);

    // Ejecutar el llamado a la api
    useEffect(() =>{
        const obtenerCategorias = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }

        obtenerCategorias();
    }, []);

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;
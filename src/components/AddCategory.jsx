import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // se evita el refresh del componente 
        if( inputValue.trim().length <= 1) return; // evita que la funcion se siga ejecutando y se regresa

        setinputValue(''); // se limpia el input
        onNewCategory( inputValue.trim() );
        // setCategories( categories => [ ...categories, inputValue ]);
       

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>
    )
}

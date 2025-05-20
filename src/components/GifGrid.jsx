// import { useEffect, useState } from 'react'; // primero se importa react
// funciones de terceros
import { GifItem } from './GifItem'; //nuestro codigo
// import { getGifs } from '../helpers/getGifs'; // funciones que no son componentes o hooks 
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs( category );

    console.log({ images, isLoading});

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && ( <h2> Cargando... </h2>)
            }

            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    ></GifItem>
                ))}

            </div>
        </>
    );
}

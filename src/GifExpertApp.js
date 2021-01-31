import React, {useState} from 'react'
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {
    const categoriasBase = ['Patricio Estrella'];

    const [categoria, setCategoria] = useState(categoriasBase);

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories = {setCategoria} />
            
            {
                categoria.map( category => (
                    <GifGrid 
                    key = {category}
                    category = {category} />
                ))
            }
            
        </>
    )
}
export default GifExpertApp;

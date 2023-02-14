import { useState } from 'react';
import '../styles.css';
import { Frases } from './Frases';

{/*function aprendiendo() {

const[numero, setNumero] = useState(0);

const cambiar = () => setNumero(x = Math.floor(Math.random()*11));

} */}

export function Quotes() {
    const Generar = () => {
        return Math.floor(Math.random()*11);
    }

    let x = Generar();
    const [title, setTitle] = useState(Frases()[x]);


    const changeTitle = () => {
        Generar();
        const phrase  = Frases()[x];
        setTitle(phrase);
    }

    return (
        <div className='contenedor'>
            <div className='box'>
                <div className='quote'>
                    <h3>{title}</h3>
                </div>
                <div className='author'>
                    Steve Jobs
                </div>
                <div className='buttons'>
                    <button className='social-media'>Tw</button> <button className='social-media'>Fb</button>
                    <button onClick={() => {changeTitle()}} className='quote-button'>New Quote</button>
                </div>
            </div>
        </div>
    );

}


// https://gist.githubusercontent.com/Andresgbe/a96e7417ad97a4a8971a8bf67efa710c/raw/af45b614da36ec04d49eb28fcafd9ddf77dc57e5/gistfile1.txt
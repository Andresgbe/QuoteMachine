import { useState } from 'react';
// import '../styles.css';
import '../background-styles.css';
import { Frases } from './Frases';
import { Autores } from './Frases';
import twitter from './twitter.png';
import facebook from './facebook.png';

var authorActual = '',
    quoteActual = '';

const $generate = document.getElementById('generate'),
      $reset = document.getElementById('reset'),
      $showColor = document.querySelector('.color-hex');

let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

document.addEventListener('click', e => {
    if (e.target === $generate) {
        let color = "#";
        for (let i = 0; i < 6; i++) color += hex[randomNumber()];
        $showColor.innerHTML = color;
        document.body.style.background = color;
    }
    if (e.target === $reset) {
        $showColor.innerHTML = "#303134";
        document.body.style.background = "#303134";
    }

})


function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}



export function Quotes() {
    const Generar = () => {
        return Math.floor(Math.random()*11);
    }

    let x = 0;
    const [title, setTitle] = useState(Frases()[x]);
    const [autor, setAutor] = useState(Autores()[x]);

    let phrase = '';
    let autorr = '';

    const changeTitle = () => {
        Generar();
        x = Generar();
        phrase  = Frases()[x];
        setTitle(phrase);
        autorr  = Autores()[x];
        setAutor(autorr);
    }


   
   
    authorActual = autorr;
    quoteActual = phrase;

  
    

    return (
        <div id='wrapper' className='contenedor'>
            <div id='quote-box' className='box'>
                <div id='quote-text' className='quote'>
                    <h3>{title}</h3>
                </div>
                <div id='author' className='author'>
                   -{ autor }
                </div>
                <div className='buttons'>
                    
                    <button className='social-media buttons-especify'>
                        <a
                            id='tweet-quote'
                            target='_top'
                            href='twitter.com/intent/tweet'
                        >

                        <img className="logo" src={twitter} />
                        </a>
                        </button> 
                        <button quote='faceboo-quote' className='social-media buttons-especify'>
                            <a
                                id='tweet-quote'
                                target='_top'>
                                <img 
                                    className='logo' 
                                    src = {facebook}/>
                          </a>
                        </button>
                    
                    <span class="color-hex"></span>  
                    <button id="generate"  onClick={() => {changeTitle()}} className='quote-button'>New Quote</button>
                </div>
            </div>
        </div>
    );

}


// https://gist.githubusercontent.com/Andresgbe/a96e7417ad97a4a8971a8bf67efa710c/raw/af45b614da36ec04d49eb28fcafd9ddf77dc57e5/gistfile1.txt
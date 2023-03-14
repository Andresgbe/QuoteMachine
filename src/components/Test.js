import { useState } from 'react';
import '../background-styles.css';

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




export function Test() {

    let array = [1,2,3,4,5];

    const Generar = () => {
        return Math.floor(Math.random()*5);
    }

    let x = Generar();
    const [title, setTitle] = useState(array[x]);


    const changeTitle = () => {
        Generar();
        const numero  = Generar();
        setTitle(numero);
    }



    return(
        <div>
           <div className='buttons'>
                   <h3> { title } </h3>
                   <span class="color-hex">#303134</span>                
                    <button id="generate" onClick={() => {changeTitle()}} className='quote-button'>New Quote</button>
                </div>
        </div>
    );
}
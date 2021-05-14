import React, { useState } from 'react';
import './style.css';

export default function NumeroAleatorio() {
    const [numeroaleatorio, setNumero] = useState(0);

    function gerar(){
        const novo = Math.floor(Math.random() * (100 - 1) + 1);
        setNumero(novo);
    }

    return(
        <div className="card-numeroaleatorio">
            <div>
            <p>
            <h3>Número aleatório:</h3>
            <h1>{numeroaleatorio}</h1>
            </p>
            
            <p>
                Click no botão para gerar um numero aleatório
            </p>
            <button onClick={gerar}>
                Gerar número
            </button>
            </div>
            
        </div>
    );
}
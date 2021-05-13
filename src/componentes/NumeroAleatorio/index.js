import React, { useState } from 'react';
import './style.css';

export default function NumeroAleatorio() {
    const [numeroaleatorio, setNumero] = useState(1);
    return(
        <div className="conteudo">
            <h3>Número aleatório:</h3>
            <h1>{numeroaleatorio}</h1>
            <div className="botao">
            <label>
                Click no botão para gerar um numero aleatório
            </label>
            <button>
                Gerar número
            </button>
            </div>
        </div>
    );
}
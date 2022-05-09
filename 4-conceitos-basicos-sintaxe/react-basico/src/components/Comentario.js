import React from 'react';

// importar o arquivo css inteiro
import './Comentario.css';

const Comentario = (props) => {
    // return <div>ola eu sou um component</div>
    return(
        <div className="Comentario" >
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.data.toString()}</p>
        </div>
    );
}

export default Comentario;

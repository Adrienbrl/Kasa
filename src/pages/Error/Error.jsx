import React from 'react';
import "./Error.scss"
function Error(props) {
    return (
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <span>Retourner à la page d'accueil</span>
        </div>
    );
}

export default Error;
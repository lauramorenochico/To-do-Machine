//creando portales

import React from "react";
import ReactDOM  from "react-dom";
import './Modal.css';

function Modal ({children}) {
    return ReactDOM.createPortal(
        <div className="modalContainer"> {/*contenido que queremos teletransportar*/}
            {children}
        </div>,
        document.getElementById('modal'), {/*dónde hay que teletransportarlo, cual es el nodo con id al que queremos hacer llevarlo, en este caso al index.html*/}
    );
}

export {Modal};
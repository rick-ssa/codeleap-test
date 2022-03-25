import { Children } from 'react';
import ReactDOM from 'react-dom';

import './styles.css'

const Modal = ({children}) => {
    const portal = document.getElementById('portal-root')
    return ReactDOM.createPortal(
        <div className="modal__overlay">
            <div className="modal">
                {children}
            </div>
        </div>,
        portal
    )
}

export default Modal
import ReactDOM from 'react-dom';

import './styles.css'

const Modal = ({children, onClickOut}) => {
    const portal = document.getElementById('portal-root')

    const handleOnClickOUt = (e) => {
        if (e.target.classList.contains('modal__overlay')) {
            onClickOut(e)
        }
        e.stopPropagation()
    }
    return ReactDOM.createPortal(
        <div 
            className="modal__overlay"
            onMouseDown = {handleOnClickOUt}
        >
            <div className="modal">
                {children}
            </div>
        </div>,
        portal
    )
}

export default Modal
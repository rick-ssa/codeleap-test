import ActionButton from '../ActionButton'
import './styles.css'

const Dialog = ({title, children, buttons }) => {
    return (
        <div 
            className="dialog"
        >
            <h2 className="dialog__title">
                {title}
            </h2>
            <div className="dialog__content">
                {children}
            </div>
            <div className="dialog__buttons">
                {buttons  && buttons.map((button, index)=>{
                    return (
                        <ActionButton 
                            key = {index}
                            text={button.text}
                            active={button.active}
                            simple={button.simple}
                            marginRight={button.marginRight}
                            onClick={button.onClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Dialog
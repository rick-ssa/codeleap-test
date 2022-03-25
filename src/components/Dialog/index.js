import ActionButton from '../ActionButton'
import './styles.css'

const Dialog = ({title, children, buttons, marginLeft = 0, marginTop = 0, marginRight = 0, marginBottom = 0 }) => {
    return (
        <div 
            className="dialog"
            style={{marginTop, marginRight, marginBottom, marginLeft}}
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
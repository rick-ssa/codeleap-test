
import './styles.css'

const InputText = ({title, placeholder, value, onChange, onKeyUp, multline = false}) => {
    return (
        <div className='input_text'>
            <label className='input_text__label'>{title}</label>
            { 
                multline ?
                
                <textarea 
                    placeholder={placeholder}
                    value = {value}
                    onChange = {onChange}
                    onKeyUp = {onKeyUp}
                />
                    
                :

                <input 
                    type='text' 
                    placeholder={placeholder}
                    value = {value}
                    onChange = {onChange}
                    onKeyUp = {onKeyUp}
                />
            }
        
        </div>
    )
}

export default InputText
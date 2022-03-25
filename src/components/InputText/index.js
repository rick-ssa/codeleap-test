
import './styles.css'

const InputText = ({title, placeholder, value, onChange, multline = false}) => {
    return (
        <div className='input_text'>
            <label className='input_text__label'>{title}</label>
            { 
                multline ?
                
                <textarea 
                    placeholder={placeholder}
                    value = {value}
                    onChange = {onChange}
                />
                    
                :

                <input 
                    type='text' 
                    placeholder={placeholder}
                    value = {value}
                    onChange = {onChange}
                />
            }
        
        </div>
    )
}

export default InputText
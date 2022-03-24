
import './styles.css'

const InputText = ({title, placeholder, value, multline = false}) => {
    return (
        <div className='input_text'>
            <label className='input_text__label'>{title}</label>
            { 
                multline ?
                
                <textarea 
                    placeholder={placeholder}
                    value = {value}
                />
                    
                :

                <input 
                    type='text' 
                    placeholder={placeholder}
                    value = {value}
                />
            }
        
        </div>
    )
}

export default InputText
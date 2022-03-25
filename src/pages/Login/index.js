import { useState } from 'react'
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import './styles.css'


const Login = () => {
    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='login'>
            <Dialog
                width='500px'
                title='Welcome to CodeLeap network!'
                buttons={[{text:'enter', active: text !== '', simple: false, onClick:''}]}
            >
                <InputText 
                    title='Please enter your username'
                    placeholder='John Doe'
                    onChange =  {handleOnChange}
                    value = {text}
                />
            </Dialog>
        </div>
    )
}

export default Login
import { useState } from 'react'
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import './styles.css'


const Singup = () => {
    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='singup'>
            <div className="singup__content">
                <Dialog
                    title='Welcome to CodeLeap network!'
                    buttons={[{text:'enter', active: text !== '', simple: false, onClick:()=>console.log('loged')}]}
                >
                    <InputText 
                        title='Please enter your username'
                        placeholder='John Doe'
                        onChange =  {handleOnChange}
                        value = {text}
                    />
                </Dialog>
            </div>
        </div>
    )
}

export default Singup
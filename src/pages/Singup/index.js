import { useEffect, useState } from 'react'
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import {connect} from 'react-redux'
import {singupAction} from '../../actions'
import {useNavigate} from 'react-router-dom'
import './styles.css'


const Singup = ({dispatch, user}) => {
    const [text, setText] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user) {
            navigate('/')
        }
    },[])

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnKeyUp = (event) => {
        if(event.code === 'Enter' || event.key === 'Enter') {
            handleOnClick()
        }
    }

    const handleOnClick = ()=>{
        dispatch(singupAction(text))
        navigate('/posts')
    }

    return (
        <div className='singup'>
            <div className="singup__content">
                <Dialog
                    title='Welcome to CodeLeap network!'
                    buttons={[{
                        text:'enter', 
                        active: text !== '', 
                        simple: false, 
                        onClick: handleOnClick
                    }]}
                >
                    <InputText 
                        title='Please enter your username'
                        placeholder='John Doe'
                        onChange =  {handleOnChange}
                        value = {text}
                        onKeyUp = {handleOnKeyUp}
                    />
                </Dialog>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    const {user} = state
    return ({user})
}

export default connect(mapStateToProps)(Singup)
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import './styles.css'


const Login = () => {
    return (
        <div className='login'>
            <Dialog
                width='500px'
                title='Welcome to CodeLeap network!'
                buttons={[{text:'enter', active: true, simple: false, onClick:''}]}
            >
                <InputText 
                    title='Please enter your username'
                    placeholder='John Doe'
                />
            </Dialog>
        </div>
    )
}

export default Login
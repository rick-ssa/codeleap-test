import { useState } from 'react'
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import Post from '../../components/Post'
import './styles.css'

const Main = ()=> {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <div className="main">
            <div className="main__container">
                <header className="main__header">CodeLeap Network</header>
                <div className="main__content">
                    <Dialog 
                        marginBottom='34px'
                        title="What's on your mind?"
                        buttons = {[{text:'create', active: title && content, simple:false, onClick:()=>{console.log('create')}}]}
                    >
                        <InputText 
                            title='Title'
                            placeholder='Type something'
                            onChange = {(e) => {setTitle(e.target.value)}}
                        />
                        <InputText 
                            title='Content'
                            placeholder='Content here'
                            onChange={(e) => {setContent(e.target.value)}}
                            multline
                        />
                    </Dialog>

                    <Post
                        title='My First Post at CodeLeap Network!'
                        creator='@Victor'
                        time='25 minutes ago'
                        text = 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.                        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
                        marginBottom='34px'
                    />
                </div>
            </div>
        </div>
    )
}

export default Main
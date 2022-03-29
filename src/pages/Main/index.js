import { useState } from 'react'
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import Modal from '../../components/Modal'
import Post from '../../components/Post'
import './styles.css'
import {connect} from 'react-redux'
import {addPostAction} from '../../actions'

const Main = ({posts, user, dispatch})=> {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [modalType, setModalType] = useState('')

    const handleCreatePost = () => {
        const post = {
            title,
            username: user,
            content,
        }

        dispatch(addPostAction(post))
    }

    return (
        <div className="main">
            <div className="main__container">
                <header className="main__header">CodeLeap Network</header>
                <div className="main__content">
                    <Dialog 
                        marginBottom='34px'
                        title="What's on your mind?"
                        buttons = {[{
                            text:'create', 
                            active: title && content, 
                            simple:false, 
                            onClick: handleCreatePost
                        }]}
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

                    {
                        posts.map(post=>(
                            <Post
                                key = {post.id}
                                id = {post.id}
                                title ={post.title}
                                creator ={`@${post.username}`}
                                time = {post.created_datetime}
                                text = {post.content}
                                marginBottom = '34px'
                            />
                        ))
                    }
                </div>
            </div>

            {
                modalType

                &&

                <Modal >

                    {
                        modalType === 'delete' 

                        ?

                        <Dialog 
                            title='Are you sure you want to delete this item?'
                            buttons={[
                                {
                                    text: 'Cancel',
                                    simple: true,
                                    onClick: ()=>console.log('cancel'),
                                    marginRight: '16px'
                                },
                                {
                                    text: 'OK',
                                    simple: true,
                                    onClick: ()=>console.log('ok')
                                }
                            ]}
                        />

                        :

                        <Dialog
                            title = 'Edit Item'
                            buttons={[{
                                text: 'save',
                                active: true,
                                onClick: ()=>{console.log('save')}
                            }]}
                        >
                            <InputText 
                                title = 'Title'
                                placeholder='Title'
                            />

                            <InputText 
                                title = 'Content'
                                placeholder='Content'
                                multline
                            />
                        </Dialog>
                    }
                </Modal>
                
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    const {posts, user} = state
    return ({posts,user})
}

export default connect(mapStateToProps)(Main)
import { useRef, useState } from 'react'
import Dialog from '../../components/Dialog'
import InputText from '../../components/InputText'
import Modal from '../../components/Modal'
import Post from '../../components/Post'
import './styles.css'
import {connect} from 'react-redux'
import {addPostAction, deletePostAction, editPostAction} from '../../actions'

const Main = ({posts, user, dispatch})=> {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [modalType, setModalType] = useState('')
    const [editableTitle, setEditableTitle] = useState('')
    const [editableContent, setEditableContent] = useState('')

    const postRef = useRef(null)

    const handleCreatePost = () => {
        const post = {
            title,
            username: user,
            content,
        }
                
        setContent('')
        setTitle('')
        
        dispatch(addPostAction(post))
    }

    const handleOnKeyUp = (event) => {
        if(
            (event.code === 'Enter' || event.key === 'Enter') && 
            (title && content)
        ) {
            handleCreatePost()
        }
    }

    const handleModalDelete = (id) => {
        setModalType('delete')
        postRef.current = posts.filter(p=>p.id===id)[0]
    }

    const handleModalEdit = (id) => {
        setModalType('edit')
        postRef.current = posts.filter(p=>p.id===id)[0]
        setEditableTitle(postRef.current.title)
        setEditableContent(postRef.current.content)
    }

    const deletePost = (id) => {
        dispatch(deletePostAction(id))
        setModalType(null)
    }

    const editPost = (post) => {
        const editedPost = {...post, title: editableTitle, content: editableContent}
        dispatch(editPostAction(editedPost))
        setModalType(null)
    }

    const handleOnClickOut = () => {
        setModalType(null)
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
                            value = {title}
                            onKeyUp = {handleOnKeyUp}
                        />
                        <InputText 
                            title='Content'
                            placeholder='Content here'
                            onChange={(e) => {setContent(e.target.value)}}
                            value = {content}
                            multline
                        />
                    </Dialog>

                    {
                        posts
                        .sort((first, second)=>{
                            return second.created_datetime.getTime() - first.created_datetime.getTime()
                        })
                        .map(post=>(
                            <Post
                                key = {post.id}
                                id = {post.id}
                                title ={post.title}
                                creator ={`@${post.username}`}
                                time = {post.created_datetime}
                                text = {post.content}
                                showControls = {user === post.username}
                                marginBottom = '34px'
                                onDelete={handleModalDelete}
                                onEdit={handleModalEdit}
                            />
                        ))
                    }
                </div>
            </div>


            {
                modalType

                &&

                <Modal onClickOut={handleOnClickOut}>

                    {
                        modalType === 'delete' 

                        ?

                        <Dialog 
                            title='Are you sure you want to delete this item?'
                            buttons={[
                                {
                                    text: 'Cancel',
                                    simple: true,
                                    onClick: ()=>setModalType(null),
                                    marginRight: '16px'
                                },
                                {
                                    text: 'OK',
                                    simple: true,
                                    onClick: ()=>deletePost(postRef.current.id)
                                }
                            ]}
                        />

                        :

                        <Dialog
                            title = 'Edit Item'
                            buttons={[{
                                text: 'save',
                                active: true,
                                onClick: ()=>{editPost(postRef.current)}
                            }]}
                        >
                            <InputText 
                                title = 'Title'
                                placeholder='Title'
                                onChange={(e) => setEditableTitle(e.target.value)}
                                value = {editableTitle}
                            />

                            <InputText 
                                title = 'Content'
                                placeholder='Content'
                                onChange={(e)=>setEditableContent(e.target.value)}
                                value = {editableContent}
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
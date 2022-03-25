import './styles.css'
import {FiEdit, FiTrash2} from 'react-icons/fi'

const Post = ({
    title, 
    text, 
    time, 
    creator,
    marginLeft = 0, 
    marginTop = 0, 
    marginRight = 0, 
    marginBottom = 0 
}) => {
    return (
        <div 
            className="post"
            style={{marginTop, marginRight, marginBottom, marginLeft}}
        >
            <header className='post__header'>

                <div className="post__title">
                    {title}
                </div>

                <div className="post__buttons">
                    <FiTrash2 />
                    <FiEdit />
                </div>

            </header>


            <main className='post__main'>

                <div className="post__info">
                    <div className="post__info__creator">
                        {creator}
                    </div>

                    <div className="post__info__time">
                        {time}
                    </div>
                </div>

                <div className="post__text">
                    {text}
                </div>

            </main>
        </div>
    )
}

export default Post
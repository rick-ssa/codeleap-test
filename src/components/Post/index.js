import './styles.css'
import {FiEdit, FiTrash2} from 'react-icons/fi'

const Post = ({title, text, time, creator}) => {
    return (
        <div className="post">
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
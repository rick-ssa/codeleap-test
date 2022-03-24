import './styles.css'
import {FiEdit} from 'react-icons/fi'
import {MdDeleteForever} from 'react-icons/md'

const Post = ({title, text, time, creator}) => {
    return (
        <div className="post">
            <header className='post__header'>

                <div className="post__title">
                    {title}
                </div>

                <div className="post__buttons">
                    <MdDeleteForever />
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
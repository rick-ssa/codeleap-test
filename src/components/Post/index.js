import './styles.css'
import {FiEdit, FiTrash2} from 'react-icons/fi'
import {transformTime} from '../../utils/transformTime'

const Post = ({
    id,
    title, 
    text, 
    time, 
    creator,
    showControls,
    marginLeft = 0, 
    marginTop = 0, 
    marginRight = 0, 
    marginBottom = 0,
    onDelete,
    onEdit
}) => {
    return (
        <div 
            id = {id}
            className="post"
            style={{marginTop, marginRight, marginBottom, marginLeft}}
        >
            <header className='post__header'>

                <div className="post__title">
                    {title}
                </div>

                {
                    showControls 
                    
                    && 

                    <div className="post__buttons">
                        <span 
                            className='post__buttons__icons'
                            onClick={()=>onDelete(id)}
                        >
                            <FiTrash2 />
                        </span>

                        <span 
                            className='post__buttons__icons'
                            onClick={()=>onEdit(id)}
                        >
                            <FiEdit />
                        </span>
                    </div>
                }

            </header>


            <main className='post__main'>

                <div className="post__info">
                    <div className="post__info__creator">
                        {creator}
                    </div>

                    <div className="post__info__time">
                        {transformTime(time)}
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
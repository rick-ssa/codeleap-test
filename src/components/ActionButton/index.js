import './styles.css'

const ActionButton = ({text, onClick ,active = false, simple = false}) => {
    return (
        <button
            className='action_button'
            
            style={
                simple ?

                {
                    backgroundColor: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                    border: '1px solid black'
                }

                :

                {
                    backgroundColor: active ? 'black' : '#eee',
                    color: active ? 'white' : 'gray',
                    cursor: active ? 'pointer' : 'default',
                    border: 'none',
                    textTransform: 'uppercase',
                }
            }
            onClick = {(simple || active) && onClick}
        >
            {text}
        </button>
    )
}

export default ActionButton
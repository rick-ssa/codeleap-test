import './styles.css'

const ActionButton = ({text, onClick, marginRight = 0, active = false, simple = false}) => {
    return (
        <button
            className='action_button'
            
            style={
                simple ?

                {
                    backgroundColor: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                    border: '1px solid black',
                    marginRight
                }

                :

                {
                    backgroundColor: active ? 'black' : '#eee',
                    color: active ? 'white' : 'gray',
                    cursor: active ? 'pointer' : 'default',
                    border: 'none',
                    textTransform: 'uppercase',
                    marginRight
                }
            }
            onClick = {(simple || active) ? onClick : undefined}
        >
            {text}
        </button>
    )
}

export default ActionButton
import './styles.css'

const ActionButton = ({text, onClick ,active = false}) => {
    return (
        <button
            className='action_button'
            style={{
                backgroundColor: active ? 'black' : '#eee',
                color: active ? 'white' : 'gray',
                cursor: active ? 'pointer' : 'default'
            }}
            onClick = {active && onClick}
        >
            {text}
        </button>
    )
}

export default ActionButton
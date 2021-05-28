
import { useSelector, useDispatch } from 'react-redux'

const Info = () => {

    const state = useSelector((st) => {
        console.log(st)
        return st.app
    })
    
    const dispatch = useDispatch()

    return <div>
        <p onClick={() => dispatch({ type: 'CHANGE_TITLE', payload: 'HELLO' })
        }>{state}</p>
        <input type="text" onChange={evt => dispatch({type: 'CHANGE_BACKGROUND_COLOR', payload: evt.target.value})} />
    </div>
}

export default Info
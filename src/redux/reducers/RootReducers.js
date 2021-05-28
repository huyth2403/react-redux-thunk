import {combineReducers} from 'redux'
import PeopleReducer from './PeopleReducer'

const rootReducers = combineReducers({people: PeopleReducer})
export default rootReducers
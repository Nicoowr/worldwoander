import {createStore, combineReducers} from 'redux'
import {updateUserState} from "./Reducers/userReducer";


export default createStore(updateUserState)

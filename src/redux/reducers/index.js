import { combineReducers } from 'redux'
import userReducer from './users.reducer'
import postReducer from './posts.reducer'


const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
})


export default rootReducer
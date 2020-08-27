import { all } from 'redux-saga/effects'
import users from './users.sagas'
import posts from './posts.sagas'


export default function* rootSaga(){
    yield all([users(), posts()])
    
}
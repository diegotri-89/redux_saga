import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../reducers/Consts'


function* getPosts({ payload }){
    try{
        console.log('payload saga post',payload)
        const result = yield axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = yield result.data

        yield put({
            type: GET_POSTS_SUCCESS,
            payload: posts
        })
    }catch(err){
        yield put({
            type: GET_POSTS_ERROR,
        })
    }
}


//watchers

export default function* posts(){
    yield takeLatest(GET_POSTS, getPosts)
}
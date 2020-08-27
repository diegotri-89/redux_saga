import { GET_POSTS } from './Consts'

export const getPost = (payload) => ({
    type: GET_POSTS,
    payload
})
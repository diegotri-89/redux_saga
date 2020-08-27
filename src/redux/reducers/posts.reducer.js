import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "./Consts"

const initialState = {
  posts: [],
  fetching: false,
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, fetching: true }
    case GET_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload }
    case GET_POSTS_ERROR:
      return { ...state, fetching: false }
    default:
      return state
  }
}

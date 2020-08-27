import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "./Consts"

const initialState = {
  users: [],
  fetching: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, fetching: true }
    case GET_USERS_SUCCESS:
      return { ...state, fetching: false, users: action.payload }
    case GET_USERS_ERROR:
      return { ...state, fetching: false }
    case CREATE_USER:
      return { ...state, fetching: true }
    case CREATE_USER_SUCCESS:
      return { ...state, fetching: false }
    case CREATE_USER_ERROR:
      return { ...state, fetching: false }
    default:
      return state
  }
}

import { GET_USERS, CREATE_USER } from './Consts'


export const startGetUsers = (payload) => ({
    type: GET_USERS,
    payload
})

export const createUsers = (payload) => ({
    type: CREATE_USER,
    payload
})


/* REDUX-thunk export const getUsers = () => async (dispatch) => {

    dispatch(startGetUsers())

    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = await result.data
    
    dispatch({
        type: GET_USERS_SUCCESS,
        payload: users
    })
} */
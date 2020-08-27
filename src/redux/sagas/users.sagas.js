import { put, takeLatest } from "redux-saga/effects"
//call se usa para llamar una funcion seguido de los parametros de la funcion call(nameFunction, parameter1, paramter2)
import axios from "axios"
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../reducers/Consts"

function* getUsers({ payload }) {
  try {
    console.log("payload de la saga", payload)
    const result = yield axios.get(
      "https://jsonplaceholder.typicode.com/users"
    )
    const users = yield result.data

    yield put({
      type: GET_USERS_SUCCESS,
      payload: users,
    })
  } catch (err) {
    yield put({
      type: GET_USERS_ERROR,
    })
  }
}

function* createUser({ payload }) {
  try {
    yield console.log("se crea el usuario", payload)

    yield put({
      type: CREATE_USER_SUCCESS,
    })

    yield put({
      type: GET_USERS,
      payload: "llamada despues de crear usuario",
    })
  } catch (err) {
    yield put({
      type: CREATE_USER_ERROR,
    })
  }
}

//Watchers
export default function* users() {
  yield takeLatest(GET_USERS, getUsers)
  yield takeLatest(CREATE_USER, createUser)
}

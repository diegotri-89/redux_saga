import { createStore, compose, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
import reduxSaga from 'redux-saga'
import rootReducer from '../reducers/index'
import rootSaga from '../sagas/'


const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = reduxSaga()
export default () => {
    return {
        ...createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger))),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}
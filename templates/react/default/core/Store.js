import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, rootSaga } from '@/entities'

const configureStore = (preloadedState, history) => {
    const historyMiddleware = routerMiddleware(history)
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware, sagaMiddleware, historyMiddleware)
        )
    )
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore

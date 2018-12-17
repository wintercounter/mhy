import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducers as characters } from '@entities/Characters'
import { reducers as episodes } from '@entities/Episodes'

export * as Characters from '@entities/Characters'
export * as Episodes from '@entities/Episodes'

export const rootReducer = combineReducers({
    routerReducer,
    characters,
    episodes
})

export const rootSaga = function*() {
    yield Promise.resolve()
}

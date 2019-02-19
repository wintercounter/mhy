import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducers as characters } from '@/entities/Characters'
import { reducers as episodes } from '@/entities/Episodes'

export * as Characters from '@/entities/Characters'
export * as Episodes from '@/entities/Episodes'

export const rootReducer = history => combineReducers({
    characters,
    episodes,
    router: connectRouter(history)
})

export const rootSaga = function*() {
    yield Promise.resolve()
}

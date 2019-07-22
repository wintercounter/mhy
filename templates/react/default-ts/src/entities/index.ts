import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as Characters from '@/entities/Characters'
import * as Episodes from '@/entities/Episodes'

export { Characters, Episodes }

export const rootReducer: Reducer = history =>
    combineReducers({
        characters: Characters.reducers,
        episodes: Episodes.reducers,
        router: connectRouter(history)
    })

export const rootSaga = function*() {
    yield Promise.resolve()
}

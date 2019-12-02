import produce from 'immer'
import { GET_PENDING, GET_SUCCESS } from '@/entities/Characters'

const defaultState = {
    byId: {},
    allIds: [],
    page: 0,
    hasMore: true,
    isLoading: false
}

const CharactersReducer = (state = defaultState, { type, payload: { results, info } = {} }) =>
    produce(state, _d => {
        const draft = _d
        switch (type) {
            case GET_PENDING: {
                draft.isLoading = true
                return draft
            }
            case GET_SUCCESS: {
                for (const character of results) {
                    const { id } = character
                    if (!draft.allIds.includes(id)) {
                        draft.byId[id] = character
                        draft.allIds.push(id)
                    }
                }
                draft.page = state.page + 1
                draft.isLoading = false
                if (!info.next) {
                    draft.hasMore = false
                }
                return draft
            }
        }
    })

export default CharactersReducer

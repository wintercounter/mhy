import { getEpisode } from './api'

export const GET = 'EPISODES::GET'
export const GET_PENDING = `${GET}@pending`
export const GET_SUCCESS = `${GET}@success`

export const get = dispatch => async opts => {
    dispatch({
        type: GET_PENDING
    })

    dispatch({
        type: GET_SUCCESS,
        payload: await getEpisode(opts)
    })
}

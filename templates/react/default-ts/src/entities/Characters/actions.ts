import { getCharacter } from './api'

export const GET = 'CHARACTERS::GET'
export const GET_PENDING = `${GET}@pending`
export const GET_SUCCESS = `${GET}@success`

export const get = dispatch => async opts => {
    dispatch({
        type: GET_PENDING
    })

    dispatch({
        type: GET_SUCCESS,
        payload: await getCharacter(opts)
    })
}

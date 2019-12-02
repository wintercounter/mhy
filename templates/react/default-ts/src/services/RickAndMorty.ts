/*
 Based on https://github.com/afuh/rick-and-morty-api-node/blob/master/src/index.js
 */

const API_URL = 'https://rickandmortyapi.com/api/'

const validate = qry => {
    if ((typeof qry === 'number' && Number.isInteger(qry)) || Array.isArray(qry)) {
        return `/${qry}`
    }

    if (typeof qry === 'object') {
        return `/?${Object.keys(qry)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(qry[key])}`)
            .join('&')}`
    }

    throw new Error(`As argument use an object, an array, an integer or leave it blank`)
}

const RickAndMorty = async (endpoint = '', opt = {}) => {
    const query = validate(opt)

    try {
        const response = await fetch(`${API_URL}${endpoint}${query}`)
        return await response.json()
    } catch (e) {
        console.log(e.message)
        return {}
    }
}

export default RickAndMorty

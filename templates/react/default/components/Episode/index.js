import React, { memo } from 'react'
import { string } from 'prop-types'

const Episode = memo(({ name, airDate, episode }) => (
    <>
        <h1>{name}</h1>
        <time>{airDate}</time>
        <p>{episode}</p>
    </>
))

Episode.propTypes = {
    name: string.isRequired,
    airDate: string.isRequired,
    episode: string.isRequired
}

export default Episode

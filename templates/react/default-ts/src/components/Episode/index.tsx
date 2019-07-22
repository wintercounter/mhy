import React, { memo } from 'react'

interface IEpisodeProps {
    name: string
    airDate: number
    episode: number
}

const Episode = memo(({ name, airDate, episode }: IEpisodeProps) => (
    <>
        <h1>{name}</h1>
        <time>{airDate}</time>
        <p>{episode}</p>
    </>
))

export default Episode

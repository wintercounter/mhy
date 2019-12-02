import React, { memo, FC, ReactNode } from 'react'

interface IEpisodeProps {
    name: string
    airDate: number
    episode: number
}

const Episode: FC<IEpisodeProps> = memo(({ name, airDate, episode }) => (
    <>
        <h1>{name}</h1>
        <time>{airDate}</time>
        <p>{episode}</p>
    </>
))

export default Episode

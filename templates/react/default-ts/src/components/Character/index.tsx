import React, { memo } from 'react'
import styled from 'styled-components'

interface ICharacterProps {
    image: string
    name: string
}

interface ICharacterPropsIMG {
    src: string
    alt: string
}

const Img = styled.img<ICharacterPropsIMG>`
    width: 100%;
`

const Character = memo(({ name, image }: ICharacterProps) => (
    <>
        <h1>{name}</h1>
        <Img src={image} alt={name} />
    </>
))

export default Character

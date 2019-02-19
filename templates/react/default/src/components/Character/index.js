import React, { memo } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
`

const Character = memo(({ name, image }) => (
    <>
        <h1>{name}</h1>
        <Img src={image} alt={name} />
    </>
))

Character.propTypes = {
    name: string.isRequired,
    image: string.isRequired
}

export default Character

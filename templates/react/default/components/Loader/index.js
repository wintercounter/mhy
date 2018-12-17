import React, { memo } from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'

import Pacman from './pacman.svgx'

const Figure = styled.figure`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    opacity: ${({ visible }) => Number(visible)};
`

const Loader = memo(({ visible }) => (
    <Figure visible={visible}>
        <Pacman />
    </Figure>
))

Loader.propTypes = {
    visible: bool
}

Loader.defaultProps = {
    visible: true
}

export default Loader

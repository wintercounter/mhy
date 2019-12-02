import React, { PureComponent } from 'react'
import { func, object, arrayOf, objectOf, number, shape, bool } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Character, IntersectionObserver, Loader } from '@/components'
import { Characters as CharactersEntity } from '@/entities'
import { pageHeader } from './styles.scss'

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Li = styled.li`
    flex-basis: calc(20% - 30px);
    margin-bottom: 30px;

    @media screen and (max-width: 1024px) {
        flex-basis: calc(50% - 30px);
    }
`

export class Characters extends PureComponent {
    componentDidMount() {
        const {
            characters: {
                allIds: { length }
            }
        } = this.props

        if (!length) {
            this.fetch()
        }
    }

    fetch = () => {
        const {
            getCharacters,
            characters: { page, hasMore, isLoading }
        } = this.props
        if (hasMore && !isLoading) {
            getCharacters({ page: page + 1 })
        }
    }

    renderCharacter = id => {
        const {
            characters: { byId }
        } = this.props
        const { name, image } = byId[id]
        return (
            <Li key={id}>
                <Character name={name} image={image} />
            </Li>
        )
    }

    render() {
        const {
            characters: { allIds, isLoading }
        } = this.props
        return (
            <>
                <h1 className={pageHeader}>Characters page</h1>
                <Ul>{allIds.map(this.renderCharacter)}</Ul>
                <IntersectionObserver onIn={this.fetch}>
                    <Loader visible={isLoading} />
                </IntersectionObserver>
            </>
        )
    }
}

Characters.propTypes = {
    getCharacters: func.isRequired,
    characters: shape({
        allIds: arrayOf(number),
        byId: objectOf(object),
        page: number,
        hasMore: bool,
        isLoading: bool
    }).isRequired
}

export const mapStateToProps = ({ characters }) => ({
    characters
})

const mapDispatchToProps = dispatch => ({
    getCharacters: CharactersEntity.get(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

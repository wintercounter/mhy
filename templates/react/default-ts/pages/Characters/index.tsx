import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Character, IntersectionObserver, Loader } from '@/components'
import { Characters as CharactersEntity } from '@/entities'
import styles from './styles.scss'

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

interface ICharactersProps {
    getCharacters: (a) => {}
    characters: {
        allIds: number[]
        byId: {}
        page: number
        hasMore: boolean
        isLoading: boolean
    }
}

export class Characters extends PureComponent<ICharactersProps> {
    public componentDidMount() {
        const {
            characters: {
                allIds: { length }
            }
        } = this.props

        if (!length) {
            this.fetch()
        }
    }

    private fetch = () => {
        const {
            getCharacters,
            characters: { page, hasMore, isLoading }
        } = this.props
        if (hasMore && !isLoading) {
            getCharacters({ page: page + 1 })
        }
    }

    private renderCharacter = id => {
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

    public render() {
        const {
            characters: { allIds, isLoading }
        } = this.props
        return (
            <>
                <h1 className={styles.pageHeader}>Characters page</h1>
                <Ul>{allIds.map(this.renderCharacter)}</Ul>
                <IntersectionObserver onIn={this.fetch}>
                    <Loader visible={isLoading} />
                </IntersectionObserver>
            </>
        )
    }
}

export const mapStateToProps = ({ characters }) => ({
    characters
})

const mapDispatchToProps = dispatch => ({
    getCharacters: CharactersEntity.get(dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters)

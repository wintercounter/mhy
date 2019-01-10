import React, { PureComponent } from 'react'
import {
    func,
    object,
    arrayOf,
    objectOf,
    number,
    shape,
    bool
} from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Episode, IntersectionObserver, Loader } from '@/components'
import { Episodes as EpisodesEntity } from '@/entities'
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
    flex-basis: calc(100% / 3 - 30px);
    margin-bottom: 30px;
    text-align: center;
`

export class Episodes extends PureComponent {
    static propTypes = {
        getEpisodes: func.isRequired,
        episodes: shape({
            allIds: arrayOf(number),
            byId: objectOf(object),
            page: number,
            hasMore: bool,
            isLoading: bool
        }).isRequired
    }

    componentDidMount() {
        this.fetch()
    }

    fetch = () => {
        const {
            getEpisodes,
            episodes: { page, hasMore, isLoading }
        } = this.props
        if (hasMore && !isLoading) {
            getEpisodes({ page: page + 1 })
        }
    }

    renderEpisode = id => {
        const {
            episodes: { byId }
        } = this.props
        const { name, air_date: airDate, episode } = byId[id]
        return (
            <Li key={id}>
                <Episode name={name} airDate={airDate} episode={episode} />
            </Li>
        )
    }

    render() {
        const {
            episodes: { allIds, isLoading }
        } = this.props
        return (
            <>
                <h1 className={pageHeader}>Episodes page</h1>
                <Ul>{allIds.map(this.renderEpisode)}</Ul>
                <IntersectionObserver onIn={this.fetch}>
                    <Loader visible={isLoading} />
                </IntersectionObserver>
            </>
        )
    }
}

export const mapStateToProps = ({ episodes }) => ({
    episodes
})

const mapDispatchToProps = dispatch => ({
    getEpisodes: EpisodesEntity.get(dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Episodes)

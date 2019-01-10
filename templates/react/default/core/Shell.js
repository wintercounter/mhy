import React, { Component } from 'react'
import { history as historyType } from 'react-router-prop-types'

import { Router } from '@/core'

class Shell extends Component {
    handleStuff = () => console.log('handling stuff')

    render() {
        const { history } = this.props
        return <Router history={history} />
    }
}

Shell.propTypes = {
    history: historyType.isRequired
}

export default Shell

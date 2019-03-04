import React, { Component } from 'react'
import History from 'history/createBrowserHistory'

import { Router } from '@/core'

interface IShell {
    history: History
}

class Shell extends Component<IShell> {
    public render() {
        const { history } = this.props
        return <Router history={history} />
    }
}

export default Shell

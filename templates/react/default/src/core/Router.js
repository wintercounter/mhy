import React from 'react'
import { oneOfType, object, func } from 'prop-types'
import { history as historyType } from 'react-router-prop-types'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { hot } from 'react-hot-loader'

import { Main } from '@/layouts'
import { Characters, Episodes } from '@/pages'

const WithLayout = ({ layout: Layout, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )}
    />
)

WithLayout.propTypes = {
    layout: oneOfType([object, func]).isRequired,
    component: oneOfType([object, func]).isRequired
}

const WithHotLayout = hot(module)(WithLayout)

const Router = ({ history }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <WithHotLayout layout={Main} path="/" exact component={Characters} />
            <WithHotLayout layout={Main} path="/episodes" exact component={Episodes} />
        </Switch>
    </ConnectedRouter>
)

Router.propTypes = {
    history: historyType.isRequired
}

export default Router

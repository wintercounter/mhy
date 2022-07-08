// @ts-nocheck

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import History from 'history/createBrowserHistory'

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

const Router: React.FC<{ history: History }> = ({ history }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <WithLayout layout={Main} path="/" exact component={Characters} />
            <WithLayout layout={Main} path="/episodes" exact component={Episodes} />
        </Switch>
    </ConnectedRouter>
)

export default Router

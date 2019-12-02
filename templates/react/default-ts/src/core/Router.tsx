// @ts-nocheck

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import History from 'history/createBrowserHistory'
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

const WithHotLayout = hot(module)(WithLayout)

const Router: React.FC<{ history: History }> = ({ history }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <WithHotLayout layout={Main} path="/" exact component={Characters} />
            <WithHotLayout layout={Main} path="/episodes" exact component={Episodes} />
        </Switch>
    </ConnectedRouter>
)

export default Router

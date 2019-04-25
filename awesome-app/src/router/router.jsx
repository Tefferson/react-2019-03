import React from 'react'
import { Switch, Route, Router, Redirect } from 'react-router'
import * as Modules from '../modules'

import history from './history'

class MainRounter extends React.Component {
    render() {
        return (
            <React.Suspense fallback={<span>Carregando...</span>}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Modules.HomePage} />
                        <Route
                            path="/contador"
                            component={Modules.CounterPage}
                        />
                        <Route
                            path="/contador"
                            component={Modules.CounterPage}
                        />
                        <Route
                            path="/contador"
                            component={Modules.CounterPage}
                        />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </React.Suspense>
        )
    }
}

export default MainRounter

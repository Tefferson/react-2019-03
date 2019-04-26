import React from 'react'
import { Switch, Route, Router, Redirect } from 'react-router'
import * as Modules from '../modules'

import history from './history'
import AppRoute from './app-route'
import { LayoutContext } from '../contexts'

class MainRouter extends React.Component {
    render() {
        return (
            <LayoutContext.Consumer>
                {({ layout: Layout }) => (
                    <React.Suspense fallback={<span>Carregando...</span>}>
                        <Router history={history}>
                            <Switch>
                                <AppRoute
                                    exact
                                    path="/"
                                    layout={Layout}
                                    component={Modules.HomePage}
                                />
                                <AppRoute
                                    path="/contador"
                                    layout={Layout}
                                    component={Modules.CounterPage}
                                />
                                <Route
                                    path="/jogo-da-velha"
                                    component={Modules.TicTacToePage}
                                />
                                <Route
                                    path="/fotos"
                                    component={Modules.PhotosPage}
                                />
                                <Route
                                    path="/fala"
                                    component={Modules.SpeechPage}
                                />
                                <Redirect to="/" />
                            </Switch>
                        </Router>
                    </React.Suspense>
                )}
            </LayoutContext.Consumer>
        )
    }
}

export default MainRouter

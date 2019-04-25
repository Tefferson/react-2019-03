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
                        <Route
                            exact
                            path="/"
                            component={Modules.HomePage} />
                        <Route
                            path="/contador"
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
        )
    }
}

export default MainRounter

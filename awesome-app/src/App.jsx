import React from 'react'
import MainRouter from './router/router'
import { MainLayout } from './layouts'
import { LayoutContext } from './contexts'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            layout: MainLayout,
            changeLayout: layout => this.setState({ layout })
        }
    }

    render() {
        return (
            <LayoutContext.Provider value={this.state}>
                <MainRouter />
            </LayoutContext.Provider>
        )
    }
}

export default App

import React from 'react'
import store from './ducks/store'
import MainRouter from './router/router'
import { Provider } from 'react-redux'
import { MainLayout } from './layouts'
import { LayoutContext } from './contexts'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			layout: MainLayout
		}

		this.changeLayout = changeLayout.bind(this)
	}

	render() {
		return (
			<Provider store={store}>
				<LayoutContext.Provider
					value={{ layout: this.state.layout, changeLayout: this.changeLayout }}
				>
					<MainRouter />
				</LayoutContext.Provider>
			</Provider>
		)
	}
}

function changeLayout(layout) {
	this.setState({ layout })
}

export default App

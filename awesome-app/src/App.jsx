import React from 'react'
import MainRouter from './router/router'
import { LayoutContext } from './contexts'
import { MainLayout } from './layouts'

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
			<LayoutContext.Provider
				value={{ layout: this.state.layout, changeLayout: this.changeLayout }}
			>
				<MainRouter />
			</LayoutContext.Provider>
		)
	}
}

function changeLayout(layout) {
	this.setState({ layout })
}

export default App

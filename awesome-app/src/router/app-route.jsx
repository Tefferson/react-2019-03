import React from 'react'
import { Route } from 'react-router'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route
		{...rest}
		render={matchProps => (
			<Layout>
				<Component {...matchProps} />
			</Layout>
		)}
	/>
)

export default AppRoute

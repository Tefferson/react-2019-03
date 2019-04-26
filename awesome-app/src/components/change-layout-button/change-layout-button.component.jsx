import React from 'react'
import { LayoutContext } from '../../contexts'
import { MainLayout, PrivateLayout } from '../../layouts'

const ChangeLayoutButton = () => (
	<LayoutContext.Consumer>
		{({ changeLayout }) => (
			<div>
				<button onClick={() => changeLayout(MainLayout)}>
					Layout principal{' '}
					<span role='img' aria-label='heart'>
						❤
					</span>
				</button>
				<button onClick={() => changeLayout(PrivateLayout)}>
					Layout privado{' '}
					<span role='img' aria-label='smile'>
						😁
					</span>
				</button>
			</div>
		)}
	</LayoutContext.Consumer>
)

export default ChangeLayoutButton

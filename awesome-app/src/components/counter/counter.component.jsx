import React from 'react'
import styled from 'styled-components'

const CounterComponent = props => (
	<StyledContainer>
		<h1>{props.name}</h1>
		<div className='counter-container'>
			<button onClick={props.subtract}>-</button>
			<span>{props.count}</span>
			<button onClick={props.add}>+</button>
		</div>
	</StyledContainer>
)

const StyledContainer = styled.div`
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px 15px;
`

export default CounterComponent
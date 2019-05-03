import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Creators as CounterCreators } from '../../ducks/counter/counter'

class CounterComponent extends React.Component {
	render() {
		return (
			<StyledContainer>
				<h1>{this.props.name}</h1>
				<div className='counter-container'>
					<button onClick={this.props.subtract}>-</button>
					<span>{this.props.count}</span>
					<button onClick={this.props.add}>+</button>
				</div>
			</StyledContainer>
		)
	}
}

const StyledContainer = styled.div`
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px 15px;
`

const mapStateToProps = ({ counter }) => ({
	count: counter.count
})

const mapDispatchToProps = {
	add: CounterCreators.add,
	subtract: CounterCreators.subtract
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterComponent)

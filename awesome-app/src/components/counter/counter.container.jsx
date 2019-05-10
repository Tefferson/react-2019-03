import React from 'react'
import CounterComponent from './counter.component'
import { connect } from 'react-redux'
import { Creators as CounterCreators } from '../../ducks/counter/counter'

class Counter extends React.Component {
	render() {
		const { name, add, subtract, count } = this.props

		return <CounterComponent {...{ name, add, subtract, count }} />
	}
}

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
)(Counter)

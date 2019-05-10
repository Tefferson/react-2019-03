import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Creators as AuthenticationCreators } from '../../ducks/authentication/authentication'

class LoginPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
		}

		this.login = login.bind(this)
	}

	render() {
		return (
			<div>
				<input
					placeholder='username'
					onChange={e => this.setState({ username: e.target.value })}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={e => this.setState({ password: e.target.value })}
				/>
				<button onClick={this.login}>entrar</button>
			</div>
		)
	}
}

function login() {
	const { username, password } = this.state
	this.props.signIn(username, password)
}

const mapDispatchToProps = {
	signIn: AuthenticationCreators.signIn
}

export default connect(
	null,
	mapDispatchToProps
)(LoginPage)

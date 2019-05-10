import AuthenticationService from '../../services/authentication.service'

const initialState = {
	isSignedIn: false,
	isSingningIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		photoURL: ''
	}
}

const prefix = 'authentication/'

const Types = {
	SIGN_IN: prefix + 'SIGN_IN',
	SET_USER: prefix + 'SET_USER'
}

const setUser = user => ({
	type: Types.SET_USER,
	payload: { user }
})

const signIn = (username, password) => dispatch =>
	AuthenticationService.login(username, password).then(user =>
		dispatch(setUser(user))
	)

export const Creators = {
	signIn
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.SIGN_IN:
			return { ...state, isSingningIn: true }
		case Types.SET_USER:
			return {
				...state,
				isSignedIn: true,
				isSingningIn: false,
				user: action.payload.user
			}
		default:
			return state
	}
}

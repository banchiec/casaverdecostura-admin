import {
	ERROR_LOGIN,
	SUCCESS_LOGIN,
	LOADING_LOGIN,
	SESSION_IN,
	SESSION_OUT,
} from 'redux/constants/auth/authLoginConstants'

const initialState = {
	loadingLogin: false,
	successLogin: false,
	errorLogin: false,
	user: null,
}

export const loginReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOADING_LOGIN:
			return {
				...state,
				loadingLogin: true,
			}
		case SUCCESS_LOGIN:
			console.log(action.payload.user)
			return {
				...state,
				loadingLogin: false,
				successLogin: true,
				user: action.payload.user,
			}
		case ERROR_LOGIN:
			return {
				...state,
				loadingLogin: false,
				successLogin: false,
				errorLogin: true,
			}
		case SESSION_IN:
			return {
				...state,
				user: action.payload,
			}
		case SESSION_OUT:
			return {
				...state,
				successLogin: false,
				sessionIn: false,
				user: null,
			}

		default:
			return state
	}
}

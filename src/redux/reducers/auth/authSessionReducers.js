import { ERROR_SESSION_IN } from 'redux/constants/auth/authSessionConstants'
import { SUCCESS_SESSION_OUT } from 'redux/constants/auth/authSessionConstants'
import { ERROR_SESSION_OUT } from 'redux/constants/auth/authSessionConstants'
import { LOADING_SESSION_OUT } from 'redux/constants/auth/authSessionConstants'
import { SUCCESS_SESSION_IN } from 'redux/constants/auth/authSessionConstants'
import { LOADING_SESSION_IN } from 'redux/constants/auth/authSessionConstants'

const initialState = {
	loadingSessionIn: false,
	successSessionIn: false,
	errorSessionIn: false,
	loadingSessionOut: false,
	successSessionOut: false,
	errorSessionOut: false,
	user: null,
}
export const sessionReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOADING_SESSION_IN:
			return {
				...state,
				loadingSessionIn: true,
				loadingSessionOut: false,
				successSessionOut: false,
				errorSessionIn: false,
				errorSessionOut: false,
			}
		case SUCCESS_SESSION_IN:
			return {
				...state,
				loadingSessionIn: false,
				loadingSessionOut: false,
				successSessionIn: true,
				successSessionOut: false,
				errorSessionIn: false,
				errorSessionOut: false,
				user: action.payload.user,
			}
		case ERROR_SESSION_IN:
			return {
				...state,
				loadingSessionIn: false,
				successSessionIn: false,
				errorSessionIn: true,
			}
		case LOADING_SESSION_OUT:
			return {
				...state,
				loadingSessionOut: true,
			}
		case SUCCESS_SESSION_OUT:
			return {
				...state,
				loadingSessionOut: false,
				loadingSessionIn: false,
				successSessionIn: false,
				successSessionOut: true,
				errorSessionIn: false,
				user: null,
			}
		case ERROR_SESSION_OUT:
			return {
				...state,
				loadingSessionOut: false,
				successSessionOut: false,
				errorSessionOut: true,
			}
		default:
			return state
	}
}

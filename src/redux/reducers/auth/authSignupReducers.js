import {
	LOADING_SIGNUP,
	SUCCESS_SIGNUP,
	ERROR_SIGNUP,
} from 'redux/constants/auth/authSignupConstants'
const initialState = {
	loadingSignup: false,
	successSignup: false,
	errorSignup: false,
	user: null,
}

export const signupReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOADING_SIGNUP:
			return {
				...state,
				loadingLogin: true,
			}
		case SUCCESS_SIGNUP:
			return {
				...state,
				loadingLogin: false,
				successLogin: true,
				user: action.payload.user,
			}
		case ERROR_SIGNUP:
			return {
				...state,
				loadingLogin: false,
				successLogin: false,
				errorLogin: true,
			}
		// case SESSION_IN:
		// 	return {
		// 		...state,
		// 		user: action.payload,
		// 	}
		// case SESSION_OUT:
		// 	return {
		// 		...state,
		// 		successLogin: false,
		// 		user: null,
		// 	}

		default:
			return state
	}
}

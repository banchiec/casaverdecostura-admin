import { combineReducers } from '@reduxjs/toolkit'
import { loginReducer } from './auth/authLoginReducers'
import { signupReducer } from './auth/authSignupReducers'
import { sessionReducer } from './auth/authSessionReducers'

export const reducer = combineReducers({
	authLogin: loginReducer,
	authSignup: signupReducer,
	authSession: sessionReducer,
})

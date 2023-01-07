import axios from 'axios'
// import {
// 	LOADING_SIGNUP,
// 	ERROR_SIGNUP,
// 	SUCCESS_SIGNUP,
// } from 'redux/constants/auth/authLoginConstants'
import * as USER_HELPERS from '../../utils/userToken'
import { LOADING_SIGNUP } from 'redux/constants/auth/authSignupConstants'
import { SUCCESS_SIGNUP } from 'redux/constants/auth/authSignupConstants'
import { ERROR_SIGNUP } from 'redux/constants/auth/authSignupConstants'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})

export const setSignup = (credentials) => (dispatch) => {
	dispatch({ type: LOADING_SIGNUP })
	authService
		.post('/signup', credentials)
		.then((response) => {
			if (response.status === 200) {
				USER_HELPERS.setUserCurrent(response.data)
				USER_HELPERS.setUserToken(response.data.accessToken)
				return dispatch({ type: SUCCESS_SIGNUP, payload: response.data })
			}
		})
		.catch((err) => {
			return dispatch({ type: ERROR_SIGNUP, payload: err.message })
		})
	return authService
}

// export const loggedInSession = () => (dispatch) => {
// 	authService
// 		.get('session', {
// 			headers: {
// 				Authorization: USER_HELPERS.getUserToken(),
// 			},
// 		})
// 		.then((response) => {
// 			return dispatch({ type: SESSION_IN, payload: response.data.user })
// 		})
// 		.catch((err) => console.log(err))
// }

// export const logoutSession = () => (dispatch) => {
// 	authService
// 		.delete('/logout', {
// 			headers: {
// 				Authorization: USER_HELPERS.getUserToken(),
// 			},
// 		})
// 		.then((response) => {
// 			USER_HELPERS.removeUserToken()
// 			USER_HELPERS.removeUserCurrent()
// 			return dispatch({ type: SESSION_OUT, payload: response.data })
// 		})
// 		.catch((err) => {
// 			return err.status
// 		})
// }

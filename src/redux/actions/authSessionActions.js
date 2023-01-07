import axios from 'axios'
import * as USER_HELPERS from '../../utils/userToken'
import {
	LOADING_SESSION_IN,
	SUCCESS_SESSION_IN,
	ERROR_SESSION_IN,
	LOADING_SESSION_OUT,
	SUCCESS_SESSION_OUT,
	ERROR_SESSION_OUT,
} from 'redux/constants/auth/authSessionConstants'
// import { LOADING_SESSION_OUT } from 'redux/constants/auth/authSessionConstants'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})

export const loggedInSession = () => (dispatch) => {
	dispatch({ type: LOADING_SESSION_IN })
	authService
		.get('session', {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then((response) => {
			return dispatch({ type: SUCCESS_SESSION_IN, payload: response.data.user })
		})
		.catch((err) => {
			return dispatch({ type: ERROR_SESSION_IN, payload: err.message })
		})
}

export const logoutSession = () => (dispatch) => {
	dispatch({ type: LOADING_SESSION_OUT })
	authService
		.delete('/logout', {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then((response) => {
			USER_HELPERS.removeUserToken()
			USER_HELPERS.removeUserCurrent()
			return dispatch({ type: SUCCESS_SESSION_OUT, payload: response.data })
		})
		.catch((err) => {
			return dispatch({ type: ERROR_SESSION_OUT, payload: err.message })
		})
}

import axios from 'axios'
import * as USER_HELPERS from '../../utils/userToken'
import {
	LOADING_LOGIN,
	ERROR_LOGIN,
	SUCCESS_LOGIN,
	SESSION_IN,
	SESSION_OUT,
} from 'redux/constants/auth/authLoginConstants'
import { LOADING_SESSION_IN } from 'redux/constants/auth/authSessionConstants'
import { SUCCESS_SESSION_IN } from 'redux/constants/auth/authSessionConstants'

const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
})

export const getLogin = (credentials) => (dispatch) => {
	dispatch({ type: LOADING_LOGIN })
	authService
		.post('/login', credentials)
		.then((response) => {
			if (response.status === 200) {
				USER_HELPERS.setUserCurrent(response.data)
				USER_HELPERS.setUserToken(response.data.accessToken)
				dispatch({ type: SUCCESS_SESSION_IN, payload: response.data })
				return dispatch({ type: SUCCESS_LOGIN, payload: response.data })
			}
		})
		.catch((err) => {
			return dispatch({ type: ERROR_LOGIN, payload: err.message })
		})
	return authService
}

export const loggedInSession = () => (dispatch) => {
	authService
		.get('session', {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then((response) => {
			return dispatch({ type: SESSION_IN, payload: response.data.user })
		})
		.catch((err) => console.log(err))
}

export const logoutSession = () => (dispatch) => {
	authService
		.delete('/logout', {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then((response) => {
			USER_HELPERS.removeUserToken()
			USER_HELPERS.removeUserCurrent()
			return dispatch({ type: SESSION_OUT, payload: response.data })
		})
		.catch((err) => {
			return err.status
		})
}

import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0'
import './assets/css/demo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import AdminLayout from 'layouts/Admin.js'
import Login from 'views/auth/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
// import { loggedInSession } from 'redux/actions/authLoginActions'
import { loggedInSession } from 'redux/actions/authSessionActions'
import Spinner from 'components/Spinner/Spinner'

const App = () => {
	const dispatch = useDispatch()
	const { successLogin, loadingLogin, user } = useSelector((state) => state.authLogin)
	const { loadingSessionIn, successSessionIn } = useSelector((state) => state.authSession)

	useEffect(() => {
		dispatch(loggedInSession())
	}, [dispatch])
	useEffect(() => {
		console.log(loadingLogin)
	}, [])
	return (
		<Router>
			{/* {loadingSessionIn || loadingLogin ? (
				<Spinner />
			) : successSessionIn ? ( */}
			<Switch>
				<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
				<Redirect from="/" to="/admin/dashboard" />
			</Switch>
			{/* ) : (
				<>
					<Login />
					<Redirect from="/" to="/login" />
				</>
			)} */}
		</Router>
	)
}
export default App

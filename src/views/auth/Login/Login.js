// react and redux
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// bootstrap
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import { getLogin } from 'redux/actions/authLoginActions'

const Login = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const { successLogin, user } = useSelector((state) => state.authLogin)
	const [form, setForm] = useState({
		username: '',
		password: '',
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		return setForm({ ...form, [name]: value })
	}

	const handleLogin = (event) => {
		event.preventDefault()
		dispatch(getLogin(form))
	}

	return (
		<Container fluid className="p-0">
			<Row>
				<Col md={12} sm={12} xs={12}>
					<div className="main-panel-center">
						<Card className="p-5">
							<Form onSubmit={handleLogin}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="email"
										name="username"
										placeholder="Enter email"
										value={form.username}
										onChange={(e) => handleInputChange(e)}
									/>
									<Form.Text className="text-muted">
										Introduce tu usuario, por favor.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type="password"
										name="password"
										placeholder="Password"
										value={form.password}
										onChange={(e) => handleInputChange(e)}
									/>
								</Form.Group>
								<Button className="w-100" variant="primary" type="submit">
									Entrar
								</Button>
							</Form>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	)
}
export default Login

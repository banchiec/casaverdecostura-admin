import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap'
// redux
import { setSignup } from 'redux/actions/authSignupActions'

function Signup() {
	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const [form, setForm] = useState({
		username: '',
		password: '',
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		return setForm({ ...form, [name]: value })
	}

	const handleLogin = (e) => {
		e.preventDefault()
		dispatch(setSignup(form))
	}
	return (
		<Container fluid>
			<Row>
				<Col md="12">
					<Card>
						<Card.Header>
							<Card.Title as="h4">Registrar usuario</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form onSubmit={handleLogin}>
								<Row>
									<Col className="pr-1" md="6">
										<Form.Group>
											<label>Username</label>
											<Form.Control
												placeholder="Username"
												value={form.username}
												name="username"
												onChange={(e) => handleInputChange(e)}
												type="text"
											></Form.Control>
										</Form.Group>
									</Col>
									<Col className="pl-1" md="6">
										<Form.Group>
											<label htmlFor="exampleInputEmail1">Password</label>
											<Form.Control
												placeholder="Password"
												onChange={(e) => handleInputChange(e)}
												name="password"
												type="password"
												value={form.password}
											></Form.Control>
										</Form.Group>
									</Col>
								</Row>
								<Button className="btn-fill pull-right" type="submit" variant="info">
									Registrar
								</Button>
								<div className="clearfix"></div>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Signup

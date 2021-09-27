import Link from 'next/link';
import style from '@shared/login.module.css';
import NavBar from 'components/navbar';
import { Form, Button, Container, Col, Row, Card, } from 'react-bootstrap';

function Login() {
    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Body>
                                <div className={style.line}>
                                    <Card.Title className="text-center">Login</Card.Title>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Coloque seu E-mail..." />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Senha:</Form.Label>
                                        <Form.Control type="password" placeholder="Coloque sua senha..." />
                                    </Form.Group>
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Button variant="link">Esqueceu a senha?</Button>
                                        <Button variant="outline-warning">Entrar</Button>{' '}
                                    </Col>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;
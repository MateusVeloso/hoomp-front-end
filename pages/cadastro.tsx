import Link from 'next/link';
import style from '@shared/cadastro.module.css';
import NavBar from 'components/navbar';
import { Form, Button, Container, Col, Row, Card, } from 'react-bootstrap';

function Cadastro() {
    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Body>
                                <div className={style.line}>
                                    <Card.Title className="text-center">Cadastre-se no Hoomp</Card.Title>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control type="email" placeholder="Coloque seu nome..." className={style.focus} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Coloque seu E-mail..." className={style.focus} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Senha:</Form.Label>
                                        <Form.Control type="password" placeholder="Coloque sua senha..." className={style.focus} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Concordo com os Termos de uso do Hoomp." className={style.focus} />
                                    </Form.Group>
                                    <Col md={{ span: 6, offset: 5 }}>
                                        <Button variant="outline-warning">Cadastrar</Button>{' '}
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

export default Cadastro;
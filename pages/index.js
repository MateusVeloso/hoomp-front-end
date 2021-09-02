import Link from 'next/link';
// import Image from 'next/Image';
import NavBar from '../components/navbar/navbar'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            <NavBar />
            <Container fluid style={{"max-width": "1100px"}}>
                <Row>
                    <Col>
                        <h1>ESTAMOS NO BRANCH DE TESTE Conectando você com profissionais renomados do mercado.</h1>
                    </Col>
                    <Col>
                        <img style={{"float":"right"}} src="/worker.png" alt="me" width="400" height="600" />
                    </Col>
                </Row>
            </Container>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
        </>
    )
}

export default Home;
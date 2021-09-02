import Link from 'next/link';
// import Image from 'next/Image';
import NavBar from '../components/navbar/navbar'
import Category from '../components/category/category'
import SearchBox from '../components/searchBox/searchBox'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            <NavBar />
            <Container fluid style={{ "maxWidth": "1200px", "marginBottom": "250px"}}>
                <Row>
                    <Col>
                        <SearchBox />
                    </Col>
                    <Col>
                        <img style={{"float":"right"}} src="/worker.png" alt="me" width="350" height="500" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Category />
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
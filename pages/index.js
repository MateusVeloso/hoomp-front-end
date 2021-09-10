import Link from 'next/link';
import NavBar from '../components/navbar/navbar';
import Category from '../components/category/category';
import Services from '../components/services/services';
import SearchBox from '../components/searchBox/searchBox';
import ImageHome from '../components/imageHome/imageHome';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

function Home() {
    return (
        <div style={{overflowX: "hidden"}}>
            <NavBar />
            <Container fluid style={{ "maxWidth": "1200px", "marginBottom": "250px" , "padding": "20px", "background": "white", "borderRadius": "15px"}}>
                <Row> DEPLOY AGORA
                    <Col>
                        <SearchBox />
                    </Col>
                    <Col>
                        <ImageHome />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Category />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Services />
                    </Col>
                </Row>
            </Container>
            
            {/* <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link> */}
        </div>
    )
}

export default Home;
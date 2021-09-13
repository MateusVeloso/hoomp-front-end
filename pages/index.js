import Link from 'next/link';
import NavBar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
import Category from 'components/category/category';
import Services from 'components/services/services';
import SearchBox from 'components/searchBox/searchBox';
import ImageHome from 'components/imageHome/imageHome';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <div style={{overflowX: "hidden"}}>
            <NavBar />
            <Container fluid className={"container__global"}>
                <Row>
                    <Col sm={1} xl={8}>
                        <SearchBox />
                    </Col>
                    <Col sm={1} xl={4}>
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
            <Footer/>
            
            {/* <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link> */}
        </div>
    )
}

export default Home;
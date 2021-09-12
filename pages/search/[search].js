import NavBar from 'components/navbar/navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import style from './search.module.css';

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                search: 'Pedreiro'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const search = context.params.search;
    // Consultar tudo relacionado ao id 

    return {
        props: {
            search: search
        }
    }
}

function Search(props) {

    return (
        <>
            <div className={"bg"}></div>
            <NavBar />
            <Container fluid className={"container__global"}>
                <Row>
                    <Col>
                        <h1>Está procurando por {props.search}?</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
            {/* <div style={{ textAlign: 'center' }}>
                <Image src="/profissionais.png" alt="me" layout='fill' objectFit='contain' className={style.img} />
            </div> */}
            <style jsx global>
                {`
                    .bg {
                        background-image: url("/profissionais.png");
                        background: rgba(0,0,0,0.04) !important;
                    }
                `}
            </style>
        </>
    )
}

export default Search;
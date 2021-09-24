import NavBar from 'components/navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import style from './search.module.css';
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { InferGetStaticPropsType } from 'next'

interface IParams extends ParsedUrlQuery {
    search: string
}

type Params = {
    params: {
        search: string
    }
}

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

export const getStaticProps = async ({ params }: Params) => {
    // export const getStaticProps: GetStaticProps = async (context) => {
    // const { search } = context.params as IParams  // no longer causes error
    const { search } = params
    // Consultar tudo relacionado ao id 

    return {
        props: {
            search: (search ? search : "Pedreiro")
        }
    }
}

function Search({ params }: Params) {

    return (
        <>
            <div className={"bg"}></div>
            <NavBar />
            <Container fluid className={"container__global"}>
                <Row>
                    <Col>
                        <h1>Está procurando por {params.search}?</h1>
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
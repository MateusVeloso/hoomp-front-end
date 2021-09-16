import { InferGetStaticPropsType } from 'next';

import { getCategoriesList } from '@shared/util';

import Head from 'next/head';
import NavBar from 'components/navbar';
import Footer from 'components/footer';
import Category from 'components/category';
import Services from 'components/services';
import SearchBox from 'components/searchBox';
import ImageHome from 'components/imageHome';
import { Container, Row, Col } from 'react-bootstrap';

import { CategoriesList } from '@struct_types/categories'

function Home({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Hoomp</title>
            </Head>
            <div style={{ overflowX: "hidden" }}>
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
                            <Category categories={categories}></Category>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Services />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const categories: CategoriesList = getCategoriesList()

    return {
        props: {
            categories
        }
    }
}

export default Home;
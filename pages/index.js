import Link from 'next/link';

function Home() {
    return (
        <>
            <h1>HOOMP</h1>
            <h4>A maneira fácil e rápida de encontrar profissionais.</h4>
            <br></br>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
        </>
    )
}

export default Home;
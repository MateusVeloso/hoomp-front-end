import Link from 'next/link';
import NavBar from 'components/navbar/navbar'

function Sobre() {
    return (
        <>
            <NavBar />
            <h1>Sobre Nós</h1>
            <h4>...</h4>
            <br></br>
            <Link href="/">
                <a>Acessar página Home</a>
            </Link>
        </>
    )
}

export default Sobre;
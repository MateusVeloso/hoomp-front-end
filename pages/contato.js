import Link from 'next/link';
import NavBar from 'components/navbar/navbar'

function Contato() {
    return (
        <>
            <NavBar />
            <h1>Contato</h1>
            <h4>...</h4>
            <br></br>
            <Link href="/">
                <a>Acessar página Home</a>
            </Link>
        </>
    )
}

export default Contato;
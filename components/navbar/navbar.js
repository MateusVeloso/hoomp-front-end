import { Navbar, Container } from 'react-bootstrap'
import style from './navbar.module.css'

function NavBar() {
    return (
        <Navbar className={style.navbar}>
            <Container>
                <Navbar.Brand href="/">
                    <h1>Hoomp</h1>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Usuário: <a href="#login">Mateus Veloso</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import style from './navbar.module.css';
import Link from 'next/link';

function NavBar() {
    return (
        // <Navbar className={style.navbar}>
        //     <Container>
        //         <Navbar.Brand href="/">
        //             <h1>Hoomp</h1>
        //         </Navbar.Brand>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse className="justify-content-end">
        //             {/* <Navbar.Text>
        //                 Usuário: <a href="#login">Mateus Veloso</a>
        //             </Navbar.Text> */}
        //             <Navbar.Text className={style.lb_container}>
        //                 <Link href="/">
        //                 <h5>Como contratar</h5>
        //                 </Link>
        //             </Navbar.Text>
        //             <Navbar.Text className={style.lb_container}>
        //                 <a href="#login" className={style.lb_nav}>Entrar</a>
        //             </Navbar.Text>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <Navbar expand="lg" className={style.navbar}>
            <Container>
                <Link href="/"><Navbar.Brand><h1 className={style.title_home}>Hoomp</h1></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link href="#"><h5 className={style.h5}>Como contratar</h5></Nav.Link>
                        <Nav.Link href="#"><h5 className={style.h5}>Entrar</h5></Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
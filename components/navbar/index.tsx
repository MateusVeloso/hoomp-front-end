import { useRouter } from 'next/router';
import { ReactNode } from 'react'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import style from './navbar.module.css';
import Link from 'next/link';

const LINKS = [
    {
        name: 'Como contratar',
        path: '/como-contratar'
    },
    {
        name: 'Entrar',
        path: '/login'
    },
]

type NavAnchor = {
    path: string
    children: ReactNode
}

function NavAnchor({ path, children }: NavAnchor) {
    return (
        <Link href={path}>
            <a className={'nav-link'}><h5 className={style.h5}>{children}</h5></a>
        </Link>
    )
}

export default function NavBar() {
    const { pathname } = useRouter()
    return (
        <Navbar expand="lg" className={style.navbar}>
            <Container>
                <Link href="/"><Navbar.Brand><h1 className={style.title_home}>Hoomp</h1></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        {LINKS.map(({ name, path }) => (
                            <NavAnchor path={path} key={path}>{name}</NavAnchor>
                        ))}
                        <Nav.Link href="#"><h5 className={style.h5__cad}>Cadastre-se GRÁTIS</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
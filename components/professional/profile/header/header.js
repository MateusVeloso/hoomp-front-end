import style from './header.module.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { faTooth, faStar, faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { SocialIcon } from 'react-social-icons';
import Statistics from '../statistics/statistics'


function Header() {
    return (
        <>
            <Container fluid className={style.container__header} >
                <Row>
                    <Col xs={8} style={{ "padding": "20px" }}>
                        <div className={style.container__image_profile}>
                            <Image src="/rudy.jpg" alt="me" layout='fill' />
                        </div>
                        <div className={style.container__info_profile}>
                            <h3>Rudemar Melo Batista</h3>
                            <h5>Protético <FontAwesomeIcon icon={faTooth} />
                                {/* <OverlayTrigger
                                    key={'bottom'}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${'bottom'}`} >
                                            Membro <strong>Diamante</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <FontAwesomeIcon icon={faGem} />
                                </OverlayTrigger> */}
                            </h5>
                            <h6>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralho</h6>
                            <div style={{color: "gold"}}>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} /> <strong style={{color: "#999"}}>( Excelente )</strong>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ "padding": "20px" }}>
                        <div className={style.container__info_contact}>
                            <h4>Informações Pessoais</h4>
                            <h6>E-mail: rudemar@gmail.com</h6>
                            <h6>Celular: (081) 9 9970-7019</h6>
                            <h6>Cidade: Olinda / PE</h6>
                            <SocialIcon network={"whatsapp"} title={"Whatsapp"} onClick={() => { }} style={{ height: 30, width: 30 }} key="30" />
                            <SocialIcon network={"facebook"} title={"Facebook"} onClick={() => { }} style={{ height: 30, width: 30 }} key="30" />
                            <SocialIcon network={"instagram"} title={"Instagram"} onClick={() => { }} style={{ height: 30, width: 30 }} key="30" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ "background": "transparent", "borderBottom": "0px" }} className={style.container__header} >
                <Row >
                    <Col xs={4} style={{ "padding": "20px", "background": "white" }}>
                        <Statistics />
                    </Col>
                    <Col xs={8} style={{ "padding": "20px" }}>
                        Teste
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;
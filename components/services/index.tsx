// import Button from 'react-bootstrap/Button'
import style from './services.module.css'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function Services() {
    return (
        <div className={style.container__service}>
            <h1 className={style.title}>Serviços mais procurados</h1>
            <CardGroup>
                <Card className={style.card}>
                    <Card.Img variant="top" src="/electrician.jpg" />
                    <Card.Body>
                        <Card.Title>Serviço de Eletricista</Card.Title>
                        <Card.Text>
                            Um eletricista é o especialista em instalações elétricas residenciais e industriais.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={style.container__footer}>
                        <a href="#login" className={style.lb_footer}>Encontrar profissionais</a>
                    </Card.Footer>
                </Card>
                <Card className={style.card}>
                    <Card.Img variant="top" src="/bricklayer.jpg" />
                    <Card.Body>
                        <Card.Title>Serviço de Pedreiro</Card.Title>
                        <Card.Text>
                            Pedreiro é o profissional que constrói ou reveste muros, paredes, escadas, vigas, lajes, tectos, telhados, chaminés, etc., em edifícios, infraestruturas de saneamento e outras obras de construção.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={style.container__footer}>
                        <a href="#login" className={style.lb_footer}>Encontrar profissionais</a>
                    </Card.Footer>
                </Card>
                <Card className={style.card}>
                    <Card.Img variant="top" src="/painting.jpg" />
                    <Card.Body>
                        <Card.Title>Serviço de Pintura</Card.Title>
                        <Card.Text>
                            O Pintor é o profissional encarregado de preparar e aplicar a tinta na superfície que irá receber pintura..
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={style.container__footer}>
                        <a href="#login" className={style.lb_footer}>Encontrar profissionais</a>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Services;
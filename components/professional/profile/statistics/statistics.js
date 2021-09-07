import style from './statistics.module.css'
import { faStar, faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';

function Statistics() {
    return (
        <>
            <div className={style.container__statistics}>
                <h5><FontAwesomeIcon icon={faStar} /> Estatísticas do usuário </h5>
                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <td>Total de Avaliações</td>
                            <td>270</td>
                        </tr>
                        <tr>
                            <td>Total de serviços</td>
                            <td>350</td>
                        </tr>
                        <tr>
                            <td>Média de avaliação</td>
                            <td>4.9</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Statistics;
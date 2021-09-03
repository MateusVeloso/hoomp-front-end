// import Button from 'react-bootstrap/Button'
import style from './category.module.css'
import { faCar, faCogs, faHome, faTshirt, faGlassCheers, faHeartbeat, faTools, faLaptopCode, faHandsHelping, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Category() {
    return (
        <div className={style.container__category}>
            <h1 className={style.title}>Principais categorias de serviços</h1>
            <div className={style.container__item}>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faHome} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faCogs} />
                    Assistência técnica
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faCar} />
                    Autos
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faTshirt} />
                    Moda e beleza
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faHeartbeat} />
                    Saúde
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faTools} />
                    Reformas e reparos
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faGlassCheers} />
                    Eventos
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    Design e Tecnologia
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faHandsHelping} />
                    Consultoria
                </div>
                <div className={style.item}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    Aulas
                </div>
            </div>

        </div>
    )
}

export default Category;
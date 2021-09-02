// import Button from 'react-bootstrap/Button'
import style from './category.module.css'
import { House } from 'react-bootstrap-icons';

function Category() {
    return (
        <div className={style.container__category}>
            <h1 className={style.title}>Menu das categorias de serviços</h1>
            <div className={style.container__item}>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
                <div className={style.item}>
                    <House color="#FFA500" size={50} />
                    Serviços domésticos
                </div>
            </div>

        </div>
    )
}

export default Category;
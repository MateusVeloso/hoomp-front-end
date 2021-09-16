// import Button from 'react-bootstrap/Button'
import style from './category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from "next";
import { CategoriesListInterface } from '@struct_types/categories'

const Category: NextPage<CategoriesListInterface> = (c) => {
    return (
        <div className={style.container__category}>
            <h1 className={style.title}>Principais categorias de serviços</h1>
            <div className={style.container__item}>
                {c.categories.length > 0 && (
                    <>
                        {c.categories.map((categorie) => (
                            <div className={style.item} key={categorie.title}>
                                <FontAwesomeIcon icon={categorie.icon} />{categorie.title}
                            </div>
                        ))}
                    </>
                )}
            </div>

        </div>
    )
}

export default Category;
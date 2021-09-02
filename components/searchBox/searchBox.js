import Button from 'react-bootstrap/Button'
import style from './searchbox.module.css'

function SearchBox() {
    return (
        <div>
            <h1 className={style.h1}>Conectando quem precisa com quem sabe fazer</h1>
            <h4 className={style.h4}>Fale o que precisa, e encontre os melhores profissionais do mercado.</h4>
            <input type={'text'} className={style.input_search} placeholder={'O que você precisa?'}/>
            <Button className={style.button} variant="primary" size={'lg'}>Buscar</Button>
        </div>
    )
}

export default SearchBox;
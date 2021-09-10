import Button from 'react-bootstrap/Button'
import style from './searchbox.module.css'
import Link from 'next/link'

function SearchBox() {
    return (
        <div>
            <h1 className={style.h1}>Conectando quem precisa com quem sabe fazer</h1>
            <h5 className={style.h5}>Fale o que precisa, e encontre os melhores profissionais do mercado.</h5>
            <input type={'text'} className={style.input_search} placeholder={'O que você precisa?'} />
            <Link href="/search/teste" scroll={false}>
                <Button className={style.button} variant="primary" size={'lg'}>Buscar</Button>
            </Link>

        </div>
    )
}

export default SearchBox;
import Button from 'react-bootstrap/Button'
import style from './searchbox.module.css';
import { useState } from 'react';
import Router from 'next/router';

function SearchBox() {

    const [search, setSearch] = useState('');


    const initSearch = () => {
        if (!search) {
            // e.target.focus();
            document.getElementById('search').focus();
            return;
        };
        Router.push({
            pathname: `/search/${search}`,
        });
    }

    const checkSearch = async (event) => {
        if (event.keyCode == 13 && search) {
            Router.push({
                pathname: `/search/${search}`,
            });
        };
    }


    return (
        <div className={style.container__search}>
            <h1 className={style.h1}>Conectando quem precisa com quem sabe fazer</h1>
            <h5 className={style.h5}>Fale o que precisa, e encontre os melhores profissionais do mercado.</h5>
            <input
                id={'search'}
                type={'text'}
                className={style.input_search}
                placeholder={'O que você precisa?'}
                onChange={e => { setSearch(e.currentTarget.value); }}
                onKeyUp={(event) => { checkSearch(event) }} />
            <Button className={style.button} variant="primary" size={'lg'} onClick={initSearch}>Buscar</Button>

        </div>
    )
}

export default SearchBox;
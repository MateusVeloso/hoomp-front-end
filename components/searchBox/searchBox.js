import style from './searchbox.module.css'

function SearchBox() {
    return (
        <div>
            <h1 className={style.h1}>Conectando quem precisa com quem sabe fazer</h1>
            <h4 className={style.h4}>Que tipo de serviço está buscando?</h4>
            <input type={'text'} className={style.input_search} placeholder={'O que você precisa?'}/>
        </div>
    )
}

export default SearchBox;
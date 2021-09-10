export async function getStaticPaths() {
    // fallback :
    // 1 - false ( 404 para páginas que nao está no paths )
    // 2 - true ( aceita qualquer )
    // 3 - blocking ( bloqueia a request até gerar a página final ) OBS: 1 VEZ GERADA VAI PARA CACHE
    return {
        paths: [{
            params: {
                profession: 'Protetico'
            }
        }],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const profession = context.params.profession;
    // Consultar tudo relacionado ao id 

    return {
        props: {
            profession: profession
        }
    }
}


function SearchProfession(props) {
    return <div>Id do usuário : {props.profession}</div>
}

export default SearchProfession;
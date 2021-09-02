export async function getStaticPaths() {
    // fallback :
    // 1 - false ( 404 para páginas que nao está no paths )
    // 2 - true ( aceita qualquer )
    // 3 - blocking ( bloqueia a request até gerar a página final ) OBS: 1 VEZ GERADA VAI PARA CACHE
    return {
        paths: [{
            params: {
                id: '1'
            }
        }, {
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    // Consultar tudo relacionado ao id 
    
    return {
        props: {
            id: id
        }
    }
}

function User(props) {
    return <div>Id do usuário : {props.id}</div>
}

export default User;
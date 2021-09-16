import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { InferGetStaticPropsType } from 'next'

interface IParams extends ParsedUrlQuery {
    id: string
}

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

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as IParams // no longer causes error
    // Consultar tudo relacionado ao id 
    // const props = fetch(`/api/${slug}`)
    return {
        props: {
            id: id
        }
    }
}

function User({ props }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div>Id do usuário : {props.id}</div>
}

export default User;
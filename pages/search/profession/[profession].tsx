import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { InferGetStaticPropsType } from 'next'


interface IParams extends ParsedUrlQuery {
    profession: string
}

type Params = {
    params: {
        profession: string
    }
}

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
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const { profession } = params
    // Consultar tudo relacionado ao id 

    return {
        props: {
            profession: (profession ? profession : "Protetico")
        }
    }
}


function SearchProfession({ params }: Params) {
    return <div>Id do usuário : {params.profession}</div>
}

export default SearchProfession;
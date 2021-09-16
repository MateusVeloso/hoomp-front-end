import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { InferGetStaticPropsType } from 'next'


interface IParams extends ParsedUrlQuery {
    profession: string
}

// export async function getStaticPaths() {
//     // fallback :
//     // 1 - false ( 404 para páginas que nao está no paths )
//     // 2 - true ( aceita qualquer )
//     // 3 - blocking ( bloqueia a request até gerar a página final ) OBS: 1 VEZ GERADA VAI PARA CACHE
//     return {
//         // paths: [{
//         //     params: {
//         //         profession: 'Protetico'
//         //     }
//         // }],
//         fallback: 'blocking'
//     }
// }

export const getStaticProps: GetStaticProps = async (context) => {
    const { profession } = context.params as IParams // no longer causes error
    // Consultar tudo relacionado ao id 

    return {
        props: {
            profession: profession
        }
    }
}


function SearchProfession({ props }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div>Id do usuário : {props.profession}</div>
}

export default SearchProfession;
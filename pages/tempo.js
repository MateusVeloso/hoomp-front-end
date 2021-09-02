function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

// Função executada apenas no momento d o build da aplicação.
// Ideal para deixar valores "default" enquanto os valores são carregados.
export async function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        //Após um acesso, verificar o tempo do arquivo em cache,
        //Caso tenha passado 60 segundos, revalidar as propriedades estaticas.
        revalidate: 60
    }
}
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;
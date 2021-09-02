async function Tempo(request, response) {
    const dynamicDate = new Date();
    const apiCep = process.env.API_CEP;
    // http://cep.la/
    const subscribersResponse = await fetch(`${apiCep}/53433240`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const subscribersResponseJson = await subscribersResponse.json();

    // Nesse momento é feito o sistema de cache da resposta da API
    // Aqui informamos que o cache dura no minimo 10 segundos
    // e adicionamos a propriedade stale.
    // Com isso a resposta vai ser em cache e após passado esse periodo a vercel tenta atualizar
    // o cache com informações mais atuais, porém caso não tenha exito é retornado o valor do cache
    // evitando assim página invalida, queda de api, etc..
    // Ganhos - Aqui temos um ganho forte de não bater toda vez em um banco dedados ou algo do tipo
    // Como temos o tempo minimo para ir novamnete la, qualquer requisição vai receber o cache até esse tempo 
    // ser atingido.
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        subscribersResponseJson
    })
}

export default Tempo;
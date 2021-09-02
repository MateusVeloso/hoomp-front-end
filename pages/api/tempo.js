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
    response.json({
        date: dynamicDate.toGMTString(),
        subscribersResponseJson
    })
}

export default Tempo;
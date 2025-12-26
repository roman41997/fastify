export default async function initManticoreClient() {
    // Создание экземпляра клиента Manticore
    var client = new Manticoresearch.ApiClient()
    client.basePath = "http://127.0.0.1:9308" // Убедитесь, что порт и хост верны

    // Создание API-инстансов для взаимодействия с Manticore
    var indexApi = new Manticoresearch.IndexApi(client)
    var searchApi = new Manticoresearch.SearchApi(client)

    // console.log( 'indexApi: ', indexApi )
    // console.log( 'searchApi: ', searchApi )

    console.log('process.env.PORT', process.env.PORT)
}
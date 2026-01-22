import fp from 'fastify-plugin'
import { plaginOptionsManticore } from '../config/plagins-options/options.manticore.js'
import initManticoreClient from '../repositories/manticoreRepository/initManticoreClient.js'

export const manticoreClientPlugin = fp(async (app, options) => { 
    // Создание экземпляра клиента Manticore
    var client = new Manticoresearch.ApiClient()
    client.basePath = "http://127.0.0.1:9308" // Убедитесь, что порт и хост верны

    // Создание API-инстансов для взаимодействия с Manticore
    var indexApi = new Manticoresearch.IndexApi(client)
    var searchApi = new Manticoresearch.SearchApi(client)

    // console.log( 'indexApi: ', indexApi )
    // console.log( 'searchApi: ', searchApi )

    console.log('process.env.PORT', process.env.PORT)
})
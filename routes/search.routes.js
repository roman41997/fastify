import searchControllers from '../controllers/search.controllers.js'
import { getSchemaValidationSearch } from '../schemas/search/search.shema.js'

export default async function routesSearch(app, opt) {
    // Проверка ошибок в контроллере: { schema: getSchemaValidationSearch, attachValidation: true }

    console.log( 'routesSearch-printRoutes', app.printRoutes() )
    app.get('/search', { schema: getSchemaValidationSearch }, searchControllers.getSearch)
}
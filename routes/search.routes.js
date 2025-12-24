import searchControllers from '../controllers/search.controllers.js'
import { getSchemaValidationSearch } from '../schemas/search/shema.search.js'

export default async function routesSearch(app, opt) {
    // Проверка ошибок в контроллере: { schema: getSchemaValidationSearch, attachValidation: true }
    app.get('/search', { schema: getSchemaValidationSearch }, searchControllers.getSearch)
}
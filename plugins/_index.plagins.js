import configPluginEnv from './env.js'
import manticoreClientPlugin from './manticore.js'

export const allPlagins = (app) => { // Прописать в app.js
    app.register( configPluginEnv ),
    app.register( manticoreClientPlugin )
}
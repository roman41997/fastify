import configPluginEnv from './env.js'
import manticoreClientPlugin from './manticore.js'

export const allRoutes = (app) => [
    app.register( configPluginEnv ),
    app.register( manticoreClientPlugin )
]
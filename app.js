import fastify from 'fastify'
import { configPluginEnv } from './plugins/env.js'
import { manticoreClientPlugin } from './plugins/manticore.js'
// import routesSearch from './routes/search.routes.js'
import { allRoutes } from './routes/_index.routes.js'
import createError from '@fastify/error' // Delete KaboomErr

const KaboomErr = createError('KaboomErr', 'Description Err the test', 501) // Delete

export async function build(opts = {}) {
    const app = fastify(opts)

    app.setErrorHandler(function (error, request, reply) {
        if (error.validation) {
            reply.status(400).send(error.validation)
            return
        }

        reply.send(error)
    })

    // Регистрируем плагин
    await app.register(configPluginEnv)
    await app.register(manticoreClientPlugin)
    await app.register(allRoutes, { prefix: '/api/f' }) // routesSearch | allRoutes

    console.log( 'envPlugin:', app.getConfig() )
    console.log( 'envPORT:', app.PORT() )
    console.log( 'envHOST:', app.HOST() )
    console.log( 'Manticore', `${app.MHostPort()}` )


    // app.register( manticorePlugin, manticoreConfig )
    // app.register( routesSearch, { prefix: '/api/f' } )
    // app.register( import('./routes/search.routes.js'), { prefix: '/api/f' } ) // Lazy Loading

    return app
}

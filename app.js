import fastify from 'fastify'
import envPlugin from './plugins/env.js'
// import manticorePlugin from './plugins/manticore.js'
import routesSearch from './routes/search.routes.js'
import { allRoutes } from './routes/index.routes.js'
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
    // await app.register(envPlugin)
    await app.register(allRoutes, { prefix: '/api/f' }) // routesSearch | allRoutes
    console.log( 'envPlugin:' )

    // app.register( manticorePlugin, manticoreConfig )
    // app.register( routesSearch, { prefix: '/api/f' } )
    // app.register( import('./routes/search.routes.js'), { prefix: '/api/f' } ) // Lazy Loading

    return app
}

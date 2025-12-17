import fastify from 'fastify'
import routesSearch from './routes/search.routes.js'
import manticorePlugin from './plugins/manticore.js'
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
    // app.register( manticorePlugin, manticoreConfig )
    app.register( routesSearch, { prefix: '/api/f' } )

    return app
}

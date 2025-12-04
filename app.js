import fastify from 'fastify'
import routesSearch from './routes/search.routes.js'
import createError from '@fastify/error'
import manticorePlugin from './plugins/manticore.js'

const KaboomErr = createError('KaboomErr', 'Description Err the test', 501) // Delete

export async function build(opts = {}) {
    const app = fastify(opts)

    // Конфигурация Manticore
    const manticoreConfig = {
        host: process.env.MANTICORE_HOST || 'localhost',
        port: process.env.MANTICORE_PORT || 9306,
        connectionLimit: parseInt(process.env.MANTICORE_POOL_SIZE) || 10,
        acquireTimeout: 60000,
        queueLimit: 0
    };

    // Регистрируем плагин
    app.register(manticorePlugin, manticoreConfig)

    app.setErrorHandler(function (error, request, reply) {
        if (error.validation) {
            reply.status(400).send(error.validation)
            return
        }

        reply.send(error)
    })

    app.register( routesSearch, { prefix: '/api/f' } )
    return app
}
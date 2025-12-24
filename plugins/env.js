import fastifyEnv from '@fastify/env'
import { schemaEnv } from '../schemas/schema.env.js'

export default async function envPlugin(app) {
    await app.register(fastifyEnv, {
        confKey: 'config',
        data: process.env,
        schema: schemaEnv,
        dotenv: true
    })
/*
    app.decorate('getConfig', function() {
        return app.config
    })

    app.decorate('isProduction', function() {
        return app.config.NODE_ENV === 'production'
    })
*/
}
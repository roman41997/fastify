import fp from 'fastify-plugin'
import fastifyEnv from '@fastify/env'
import { plaginOptionsEnv } from '../config/plagins-options/options.env.js'
import { allDecorators } from '../decorators/decorators.env.js'

export const configPluginEnv = fp(async (app, options) => {
    await app.register(fastifyEnv, plaginOptionsEnv)

    allDecorators(app)
})
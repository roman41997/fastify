import fp from 'fastify-plugin'
import { plaginOptionsManticore } from '../config/plagins-options/options.manticore.js'
import initManticoreClient from '../repositories/manticoreRepository/initManticoreClient.js'

export const manticoreClientPlugin = fp(async (app, options) => {
  
})
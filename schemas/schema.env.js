export const schemaEnv = {
    type: 'object',
    required: ['PORT', 'HOST', 'NODE_ENV'],
    properties: {
        PORT: {
            type: 'integer',
            default: 9000
        },
        HOST: {
            type: 'string',
            default: '127.0.0.1'
        },
        NODE_ENV: {
            type: 'string',
            default: 'development'
        }
    }
}
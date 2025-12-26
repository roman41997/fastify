export const schemaEnv = {
    type: 'object',
    required: ['HOST', 'PORT', 'MHOST', 'MPORT', 'MHostPort', 'NODE_ENV'],
    properties: {
        HOST: {
            type: 'string',
            default: '127.0.0.1'
        },
        PORT: {
            type: 'integer',
            default: 9000
        },
        MHOST: {
            type: 'string',
            default: 'http://127.0.0.1'
        },
        MPORT: {
            type: 'integer',
            default: 9308
        },
        MHostPort: {
            type: 'string',
            default: 'http://127.0.0.1:9308'
        },
        NODE_ENV: {
            type: 'string',
            default: 'development'
        }
    }
}
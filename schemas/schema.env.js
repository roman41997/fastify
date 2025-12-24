export const schemaEnv = {
    type: 'object',
    required: ['PORT', 'DATABASE_URL'],
    properties: {
        PORT: { type: 'integer', default: 7000 },
        DATABASE_URL: { type: 'string' },
        JWT_SECRET: { type: 'string' }
    }
}
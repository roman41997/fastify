export const getSchemaValidationSearch = {
    querystring: {
        type: 'object',
        required: ['query'],
        properties: {
            query: {
                type: 'string',
                minLength: 3,
                maxLength: 9,
                errorMessage: {
                    type: 'Запрос должен быть строкой',
                    minLength: 'Минимальная длина - 3 символа',
                    maxLength: 'Максимальная длина - 9 символов'
                }
            }
        },

        additionalProperties: false
    }
}

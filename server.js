import { build } from './app.js'
import addFormats from 'ajv-formats'
import ajvErrors from 'ajv-errors'
import 'dotenv/config'

const opts = {
    logger: {
        level: 'info'
    },

    ajv: {
        plugins: [ [ addFormats ], [ ajvErrors ] ],
        customOptions: {
            jsonPointers: true, // Fastify использует библиотеку fast-json-stringify для ускоренной сериализации JSON.
            strict: false, // Отключаем строгий режим
            allErrors: true, // Показывать все ошибки, а не только первую
            coerceTypes: true, // Автоматическое преобразование типов
            useDefaults: true, // Использование значений по умолчанию
            removeAdditional: false, // Удалять дополнительные поля
            messages: true // Включить сообщения об ошибках
        }
    }
}

const app = await build(opts)

await app.listen({ 
    port: process.env.PORT,
    host: process.env.HOST})
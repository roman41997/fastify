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
            allErrors: true,            // Показывать все ошибки, а не только первую
            // jsonPointers: true,         // Fastify использует библиотеку fast-json-stringify для ускоренной сериализации JSON.
            strict: false,              // Отключаем строгий режим
            coerceTypes: true,          // Автоматическое преобразование типов
            useDefaults: true,          // Использование значений по умолчанию
            removeAdditional: false,    // Удалять дополнительные поля
            messages: true,             // Включить сообщения об ошибках
            verbose: false              // Для подробных ошибок
        }
    },

    dotenv: true
}

const app = await build(opts)

console.log( 'app-printRoutes', app.printRoutes() )
console.log( 'app-getSchemas', app.getSchemas() )

await app.listen({ 
    port: process.env.PORT,
    host: process.env.HOST})
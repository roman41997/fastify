// plugins/manticore.js
import fp from 'fastify-plugin';
import mysql from 'mysql2/promise';

/**
 * Manticore Search plugin for Fastify
 */
async function manticorePlugin(fastify, options) {
  const {
    host = 'localhost',
    port = 9306,
    user = '',
    password = '',
    database = '',
    connectionLimit = 10,
    acquireTimeout = 30000,
    ...poolOptions
  } = options;

  // Создаем pool соединений
  const pool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    connectionLimit,
    acquireTimeout,
    ...poolOptions
  });

  // Проверяем подключение
  try {
    const connection = await pool.getConnection();
    fastify.log.info('✅ Manticore Search подключен успешно');
    connection.release();
  } catch (error) {
    fastify.log.error('❌ Ошибка подключения к Manticore:', error);
    throw error;
  }

  // Декорируем fastify
  fastify.decorate('manticore', {
    pool,
    
    // Вспомогательные методы
    query: async (sql, params = []) => {
      const [rows] = await pool.execute(sql, params);
      return rows;
    },
    
    search: async (index, query, options = {}) => {
      const where = options.where ? `WHERE ${options.where}` : '';
      const limit = options.limit ? `LIMIT ${options.limit}` : '';
      const offset = options.offset ? `OFFSET ${options.offset}` : '';
      const orderBy = options.orderBy ? `ORDER BY ${options.orderBy}` : '';
      
      const sql = `SELECT * FROM ${index} WHERE MATCH(?) ${where} ${orderBy} ${limit} ${offset}`;
      const [rows] = await pool.execute(sql, [query]);
      return rows;
    },
    
    insert: async (index, data) => {
      const fields = Object.keys(data).join(', ');
      const values = Object.values(data);
      const placeholders = values.map(() => '?').join(', ');
      
      const sql = `INSERT INTO ${index} (${fields}) VALUES (${placeholders})`;
      const [result] = await pool.execute(sql, values);
      return result;
    },
    
    // Закрытие pool
    close: async () => {
      await pool.end();
    }
  });

  // Закрываем соединение при остановке сервера
  fastify.addHook('onClose', async (instance) => {
    await instance.manticore.close();
  });
}

export default fp(manticorePlugin, {
  fastify: '4.x',
  name: 'manticore-search'
});
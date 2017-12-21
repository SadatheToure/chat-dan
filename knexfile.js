module.exports = {
  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './.data.sqlite',
    },
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/chat'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

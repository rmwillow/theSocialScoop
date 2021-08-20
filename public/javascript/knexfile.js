module.exports = { 
    development: {
        client: 'pg',
        connection: 'postgres://localhost/cjs-web-store'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/cjs-web-store'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
}

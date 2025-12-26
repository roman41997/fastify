export const allDecorators = (app) => {
    app.decorate('HOST', function() {
        return this.config.HOST
    }),

    app.decorate('PORT', function() {
        return this.config.PORT
    }),

    app.decorate('MHOST', function() {
        return this.config.MHOST
    }),

    app.decorate('MPORT', function() {
        return this.config.MPORT
    }),

    app.decorate('MHostPort', function() {
        return this.config.MHostPort
    }),

    app.decorate('isProduction', function() {
        return this.config.NODE_ENV === 'production'
    }),

    app.decorate('isDevelopment', function() {
        return this.config.NODE_ENV === 'development'
    }),

    app.decorate('getConfig', function() {
        return { ...this.config }
    })
}
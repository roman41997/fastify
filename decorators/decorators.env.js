export const allDecorators = (app) => [
    app.decorate('PORT', function() {
        return this.config.PORT
    }),

    app.decorate('HOST', function() {
        return this.config.HOST
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
]
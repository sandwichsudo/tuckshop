module.exports = {
    cacheId: 'tuckshop-test',
    filename: 'tuckshop-test-service-worker.js',
    maximumFileSizeToCacheInBytes: 4194304,
    runtimeCaching: [{
        urlPattern: /https?:\/\/fonts.+/,
        handler: 'fastest'
    }, {
        urlPattern: /https?:\/\/img.tesco+/,
        handler: 'fastest'
    }, {
        urlPattern: /https?:\/\/lh5.googleusercontent.com+/,
        handler: 'fastest'
    }],
    verbose: true,
    staticFileGlobsIgnorePatterns: [/js.map/],
    navigateFallback: 'index.html',
    navigateFallbackWhitelist: [/^\/login/, /^\/shop/, /^\/tab/, /^\/admin/]
};

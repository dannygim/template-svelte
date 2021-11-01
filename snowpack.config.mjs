/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        [
            'snowpack-plugin-rollup-bundle',
            {
                emitHtmlFiles: true,
                preserveSourceFiles: true,
                entrypoints: 'build/dist/index.js',
            }
        ]
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        // esbuild is still young and not yet production-ready.
        // https://www.snowpack.dev/guides/optimize-and-bundle
        // bundle: true,
        // minify: true,
        // target: 'es2020',
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        baseUrl: "./"
    },
};
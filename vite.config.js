const { resolve } = require('path')
export default {
    plugins: [],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                another: resolve(__dirname, 'single.html')
            }
        }
    }
}
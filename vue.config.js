const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    host: "192.168.31.166",
    open: true,
    server: {
      type: 'https',
    },
    proxy: 'http://localhost:3000'
  },
})

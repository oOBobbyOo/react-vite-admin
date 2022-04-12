import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
// import vitePluginImp from 'vite-plugin-imp'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
import { resolve } from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'

const themeVariables = lessToJS(fs.readFileSync(resolve(__dirname, './config/theme/variables.less'), 'utf8'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // reactRefresh(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'antd',
    //       style(name) {
    //         return `antd/lib/${name}/style/index.less`
    //       }
    //     }
    //   ]
    // })
    createStyleImportPlugin({
      resolves: [AntdResolve()],
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style/index`
        }
      ]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: [
      { find: '~', replacement: resolve(__dirname, './') },
      { find: '@', replacement: resolve(__dirname, './src') }
    ]
    // alias: {
    //   '~': resolve(__dirname, './'),
    //   '@': resolve(__dirname, 'src')
    // }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript，支持 less 内联 JS
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  }
})

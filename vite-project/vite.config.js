import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import packageConfig from "./package.json"

const Timestamp = new Date().getTime();

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  configureWebpack: (config) => {
    // webpack 配置
    return {
      output: {
        // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        filename: `[name].${packageConfig.version}.${Timestamp}.js`,
        chunkFilename: `[name].${packageConfig.version}.${Timestamp}.js`,
      },
    };
  },
  server: {
    open: true,
  },
});

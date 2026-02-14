// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  source: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
    alias: {
      // 把 @ 映射到项目根目录下的 src 文件夹
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 2. 本地开发时 assetPrefix 必须留空（部署CDN时才填地址）
  output: {
    assetPrefix: '', // 核心：本地开发不要加任何前缀
  },
  html: {
    // 注入沉浸式状态栏所需的 Meta 标签
    meta: {
      // 视口配置：开启 viewport-fit=cover（沉浸式核心）
      viewport: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      },
      // 状态栏主题色（和网页主色匹配，提升融合感）
      'theme-color': {
        name: 'theme-color',
        content: '#000000', // 可改为你的网页主色，比如 #165DFF
      },
    },
  },
});

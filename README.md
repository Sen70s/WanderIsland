# WanderIsland 🏝️

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react" alt="React Version">
  <img src="https://img.shields.io/badge/Rsbuild-1.7.1-FF6B6B?style=flat-square&logo=webpack" alt="Rsbuild Version">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS Version">
  <img src="https://img.shields.io/github/license/yourusername/wanderisland?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/languages/top/yourusername/wanderisland?style=flat-square" alt="Language">
</p>

<p align="center">
  一个基于 Rsbuild 构建的现代化 React 应用，拥有智能路由系统和 iOS 风格的移动端导航体验。
</p>

<p align="center">
  <a href="#features">功能特性</a> •
  <a href="#tech-stack">技术栈</a> •
  <a href="#quick-start">快速开始</a> •
  <a href="#screenshots">截图预览</a> •
  <a href="#directory-structure">目录结构</a>
</p>

## 🌟 项目亮点

WanderIsland 是一个精心设计的 React 应用模板，融合了现代前端技术和优秀的用户体验设计。它不仅展示了如何构建一个完整的单页应用，还提供了 iOS 风格的移动端导航体验。

## ✨ 功能特性

### 🚀 核心功能
- **智能路由系统** - 基于登录状态的自动路由跳转
- **响应式设计** - 完美适配移动端和桌面端
- **现代化构建** - 基于 Rsbuild 的高性能构建工具
- **组件化架构** - 清晰的组件划分和复用机制

### 📱 iOS 风格导航
- **毛玻璃效果** - `backdrop-blur-xl` 创建半透明模糊背景
- **精致动画** - 选中项缩放效果和平滑过渡动画
- **系统图标** - 使用 SF Symbols 风格的图标设计
- **触觉反馈** - 点击时的视觉反馈效果

### 🔐 安全特性
- **路由保护** - 未登录用户无法访问受保护页面
- **状态管理** - 基于 localStorage 的简单认证机制
- **权限控制** - 完整的页面访问权限验证

## 🛠 Tech Stack

<div align="center">

| 类别 | 技术 | 版本 | 用途 |
|------|------|------|------|
| **核心框架** | React | 18.3.1 | UI 渲染引擎 |
| **路由管理** | React Router DOM | 7.13.0 | 客户端路由 |
| **构建工具** | Rsbuild | 1.7.1 | 现代化构建 |
| **样式框架** | Tailwind CSS | 4.1.18 | 原子化 CSS |
| **包管理** | pnpm | latest | 依赖管理 |

</div>

## 🚀 Quick Start

### 环境要求
- Node.js >= 16.0.0
- pnpm >= 7.0.0

### 安装步骤

```bash
# 克隆项目
git clone https://github.com/yourusername/wanderisland.git
cd wanderisland

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run preview
```

### 开发命令

```json
{
  "dev": "rsbuild dev --open",     // 启动开发服务器并自动打开浏览器
  "build": "rsbuild build",        // 构建生产版本
  "preview": "rsbuild preview"     // 预览生产构建
}
```

## 🖼 Screenshots

<div align="center">
  <img src="docs/screenshots/login.png" width="200" alt="登录页面">
  <img src="docs/screenshots/home.png" width="200" alt="首页">
  <img src="docs/screenshots/discover.png" width="200" alt="发现页">
  <img src="docs/screenshots/messages.png" width="200" alt="消息页">
  <img src="docs/screenshots/profile.png" width="200" alt="个人页">
</div>

*注：请将截图文件放置在 `docs/screenshots/` 目录下*

## 📁 Directory Structure

```
wanderisland/
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx        # iOS 风格底部导航栏
│   │   ├── DiscoverContent.jsx  # 发现页面内容组件
│   │   ├── HomeContent.jsx      # 首页内容组件
│   │   ├── Login.jsx           # 登录页面组件
│   │   ├── MainLayout.jsx      # 主布局容器组件
│   │   ├── MessagesContent.jsx # 消息页面内容组件
│   │   ├── ProfileContent.jsx  # 个人页面内容组件
│   │   └── ProtectedRoute.jsx  # 路由保护高阶组件
│   ├── App.css                 # 全局样式文件
│   ├── App.jsx                 # 应用根组件（路由配置）
│   └── index.jsx               # 应用入口文件
├── docs/
│   └── screenshots/            # 项目截图目录
├── public/                     # 静态资源目录
├── .gitignore                  # Git 忽略文件配置
├── package.json                # 项目配置和依赖
├── pnpm-lock.yaml             # pnpm 锁定文件
├── postcss.config.mjs         # PostCSS 配置
├── rsbuild.config.js          # Rsbuild 构建配置
└── README.md                   # 项目说明文档
```

## 🎯 路由系统

### 页面路由结构
```
/                    # 根路径（根据登录状态重定向）
├── /login          # 登录页面
└── /               # 受保护的主路由
    ├── /home       # 首页
    ├── /discover   # 发现页面
    ├── /messages   # 消息页面
    └── /profile    # 个人页面
```

### 导航布局
- **顶部导航栏** - 应用标题和退出登录按钮
- **底部导航栏** - 四个主要功能入口（首页、发现、消息、我的）
- **内容区域** - 根据底部导航动态切换的页面内容

## 🔧 自定义配置

### 修改主题颜色
在 `src/components/BottomNav.jsx` 中修改以下变量：
```javascript
const activeColor = 'bg-indigo-500';  // 选中状态颜色
const inactiveColor = 'text-gray-400'; // 未选中状态颜色
```

### 添加新页面
1. 在 `src/components/` 目录下创建新的内容组件
2. 在 `App.jsx` 中导入并添加路由配置
3. 在 `BottomNav.jsx` 中添加对应的导航项

## 🤝 贡献指南

欢迎任何形式的贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范
- 使用 ES6+ 语法
- 遵循 Airbnb JavaScript 风格指南
- 组件命名采用 PascalCase
- 文件命名采用 camelCase

## 📄 License

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库
- [Rsbuild](https://rsbuild.dev/) - 现代 Web 构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [React Router](https://reactrouter.com/) - React 应用的声明式路由

## 📞 联系方式

- 项目地址: [https://github.com/yourusername/wanderisland](https://github.com/yourusername/wanderisland)
- 邮箱: your.email@example.com
- Twitter: [@yourtwitter](https://twitter.com/yourtwitter)

---

<p align="center">
  Made with ❤️ by Your Name
</p>
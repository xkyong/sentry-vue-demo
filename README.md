# create-vue-demo

线上测试地址：http://8.129.234.28:4173/sentry-vue-demo/

sentry平台地址：https://xiekaiyong.sentry.io/issues/?project=4506170714292224&referrer=sidebar

## sentry 配置参看：

- [前端项目如何接入sentry监控平台？](https://juejin.cn/post/7073139636582744078)
- https://docs.sentry.io/platforms/javascript/guides/vue/
- https://xiekaiyong.sentry.io/projects/sentry-vue-demo/getting-started/?product=performance-monitoring&product=session-replay
- https://docs.sentry.io/platforms/javascript/guides/vue/sourcemaps/

## 上传 sourcemap 到 sentry 平台上

按照文档 https://docs.sentry.io/platforms/javascript/guides/vue/sourcemaps/ 说明，直接运行如下命令是最简便的：

```bash
npx @sentry/wizard@latest -i sourcemaps
```

不过由于运行过程中会安装 `@sentry/vite-plugin` 这个依赖，依赖执行过程中又需要安装 `sentry-cli-Windows-x86_64.exe` 软件，为了确保整个过程比较顺利，执行上述命令前需要先在全局 `.npmrc` 文件中修改  `sentry-cli` 的安装镜像地址为：

```plaintext
sentrycli_cdnurl=https://cdn.npm.taobao.org/dist/sentry-cli
SENTRYCLI_CDNURL=https://cdn.npm.taobao.org/dist/sentry-cli
```


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

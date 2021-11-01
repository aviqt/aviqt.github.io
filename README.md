# STATIC

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your static files.
Each file inside this directory is mapped to `/`.

<<<<<<< HEAD
Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).
=======
  // 自定义配置路由
  router: {
    mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
    // base: '/moli/',
    base: process.env.NODE_ENV === 'production' ? './' : '/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
    extendRoutes(routes, resolve) {
     routes.push({
      path: '/',
      redirect: {
       name: 'home'
      }
     })
    }
   },
>>>>>>> d1904f0057f7fbadcb28405eea7ba043d604c1a4

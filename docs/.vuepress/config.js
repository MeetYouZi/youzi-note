module.exports = {
  base: '/meetyouzi.github.io/',
  title: '开心果车厘子的前端集市', 
  description: '前端小记',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/jstest/' },
      {text: '开心果', link: '/css/'},
      {text: '车厘子', link: '/vue/'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}
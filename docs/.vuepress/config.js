module.exports = {
  base: '/',
  title: '开心果车厘子的前端集市',
  description: '前端小记',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '音乐馆', link: 'https://pomelomusic.now.sh' },
      {text: '前端基础', link: '/jstest/' },
      {text: '开心果', link: '/css/'},
      {text: '车厘子', link: '/vue/'},
      {text: 'GitHub', link: 'https://github.com/MeetYouZi'}
    ],
    sidebar: [
      {
        title: 'Vue',
        collapsable: true,
        path: '/vue/'
      }, {
        title: 'React',
        collapsable: true,
        path: '/react/'
      }, {
        title: 'Js集',
        collapsable: true,
        children: ['js/', 'js/skill', 'js/evenLoop']
      }, {
        title: 'css集',
        collapsable: true,
        children: ['css/', 'css/stylus', 'css/global']
      }, {
        title: '微信集',
        collapsable: true,
        children: ['weixin/', 'weixin/wxProgram']
      }, {
        title: '正则校验',
        collapsable: true,
        path: '/regexp/'
      }, {
        title: 'Git',
        collapsable: true,
        path: '/git/'
      },
    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}

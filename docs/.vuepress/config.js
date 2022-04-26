module.exports = {
  //配置网站的标题和描述
  title: 'jiajia and LY',
  description: '记录每天的欢乐时光',
  theme: 'reco',
  themeConfig: {
    //活动的标题链接
    activeHeaderLinks: false,
    //多语言
    '/zh/': {
      subSidebar: 'auto',
      sidebar: 'false'
    },
    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端面试题', link: '/interview/' },
      { text: 'javascript', link: '/JS-base/' },
      {
        text: '佳佳的前端博客',
        items: [
          { text: 'Github', link: 'https://github.com/jiajiaupup' },
          { text: '掘金', link: 'https://juejin.cn/user/1926819189889463' }
        ]
      }
    ],
    //侧边栏
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: true, // 不折叠
        children: [{ title: '学前必读', path: '/' }]
      },
      {
        title: '基础学习',
        link: '/handbook/ConditionalTypes',
        collapsable: true, // 不折叠
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes' },
          { title: '泛型', path: '/handbook/Generics' }
        ]
      }
    ],
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    // 路径名为 "/<REPO>/"
    base: '/ '
  }
}

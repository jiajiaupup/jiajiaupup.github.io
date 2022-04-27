module.exports = {
  //配置网站的标题和描述
  title: 'jiajiaupup',
  description: '记录每天的欢乐时光',
  theme: 'reco',
  // 路径名为 "/<REPO>/"
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/avatar.png'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  plugins: [
    ['@vuepress/register-components'],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      // '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      // {
      //   theme: [
      //     'shizuku',
      //     'haru1',
      //     'blackCat',
      //     'whiteCat',
      //     'haru2',
      //     'haruto',
      //     'koharu',
      //     'izumi',
      //     'wanko',
      //     'miku',
      //     'z16'
      //   ],
      //   clean: true, // 是否显示操作按钮
      //   messages: {
      //     welcome: '我是jiajia，欢迎你的关注 ',
      //     home: '心里的话，我想要带你回家。',
      //     theme: '好吧，希望你能喜欢我的其他小伙伴。',
      //     close: '再见哦'
      //   },
      //   width: 240,
      //   height: 352,
      //   modelStyle: {
      //     left: '30px',
      //     bottom: '-20px',
      //     opacity: '0.8'
      //   }
      // }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      'cursor-effects',
      {
        size: 3, // size of the particle, default: 2
        // shape: ['start'],  // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '你来啦qwq',
        hideIcon: '/failure.ico',
        hideText: '你走掉了嘛QAQ',
        recoverTime: 2000
      }
    ],
    [
      //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功!'
        }
      }
    ]
  ],

  themeConfig: {
    //活动的标题链接
    activeHeaderLinks: false,
    //多语言
    '/zh/': {
      subSidebar: 'auto',
    },
    sidebar: {
      "/article/informal-essay/": [
        "",
        "timer"
      ]
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类"
      },
      tag: {
        location: 3,
        text: "标签"
      }
    },
    //导航栏
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        "text": "随笔",
        "icon": "reco-document",
        "link": "/article/informal-essay/"
      },
      {
        "text": "留言板",
        "icon": "reco-suggestion",
        "link": "/article/message-board.md"
      },
      {
        text: '关于我',
        items: [
          { text: '个人信息', link: '/article/about.md' },
          { text: 'Github', link: 'https://github.com/jiajiaupup' },
          { text: '掘金', link: 'https://juejin.cn/user/1926819189889463' }
        ]
      }
    ],
  }
}

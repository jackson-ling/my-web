import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/my-web/',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],
  title: "jackson凌's site",
  description: "A VitePress Site",
  themeConfig: {
  siteTitle: "jackson凌",
  logo: '/星球.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {text:'markdown语法',link:'/markdown/基本语法'},
      {
          text:'python',items:
            [
              {text:'基础入门', link:'/python/基础入门'},
              {text:'进阶提升', link:'/python/进阶提升'},
            ]
      }
    ],

    sidebar:
        {
          '/python/基础入门':
              {
                text:'python',
                items:
                [
                    {text:'python 1',link:'/python/基础入门/'},
                    {text:'python 2',link:'/python/进阶提升/'},
                ]

              },
          '/python/进阶提升':
              {
                text:'python',
                items:
                [
                  {text:'python 2',link:'/python/进阶提升/'},
                ]
              }
        },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/jackson-ling' },
    ],
      footer: {
            message:'个人知识网站,创建于2024.12.12',
            copyright: 'Copyright @jackson凌 All Rights Reserved',
        }
  }
})

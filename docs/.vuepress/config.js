module.exports = {
  base:'/docs/',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    authorAvatar: 'img/IMG_4193.JPG',
    author: "coderLee",
    nav: [//导航栏
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '留言',link:'/message/', icon: 'reco-message'}
    ],
  },
  plugins: [
    [
      "vuepress-plugin-cat",
      {
        clean: true,
      },
    ],
    ['vue-canvas-effect'],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     componentsDir: './components'
    //   },
    // ],
    // [
    //   '@vuepress/register-components',
    //   {
    //     componentsDir: './components'
    //   }
    // ]
  ]
}
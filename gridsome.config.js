module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'authors/*.md',
        typeName: 'Author',
        route: '/author/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'Post',
        route: '/:slug',
        refs: {
          author: 'Author',
          categories: {
            typeName: 'Category',
            route: '/category/:slug',
            create: true
          }
        }
      }
    }
  ]
}

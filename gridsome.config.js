module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      // Add Post collection
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'Post',
        route: '/:slug',
        refs: {
          // Add a reference to Author GraphQL collection
          author: 'Author', 
          
          // Auto create a collection for all categories
          categories: { 
            typeName: 'Category',
            route: '/category/:slug',
            create: true
          }
        }
      }
    },
    {
      // Add Authors collection
      use: '@gridsome/source-filesystem',
      options: {
        path: 'authors/*.md',
        typeName: 'Author',
        route: '/author/:id'
      }
    },
  ]
}

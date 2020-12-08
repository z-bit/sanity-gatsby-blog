export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fceda0a72dc5200d9dffbc0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2z3nswm8',
                  apiId: '030b55ce-de01-44da-bf8a-b643aeda1a48'
                },
                {
                  buildHookId: '5fceda0a96d6ab012c5809ac',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vhcn45vm',
                  apiId: '8c2fad5c-6c6b-45a1-b843-62f274db9433'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/z-bit/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vhcn45vm.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

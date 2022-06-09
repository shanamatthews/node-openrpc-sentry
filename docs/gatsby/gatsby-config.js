
module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: 'Query & Transact Advanced Query APIs (preview)',
    description: "Query & Transact Advanced Query APIs (preview)",
    logoUrl: 'https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png',
    primaryColor: '#3f51b5', //material-ui primary color
    secondaryColor: '#f50057', //material-ui secondary color
    author: '',
    menuLinks: [
      {
        name: 'home',
        link: '/',
        ignoreNextPrev: true
      },
      {
        name: 'Advanced Query documentation',
        link: '/api-documentation',
        ignoreNextPrev: true
      },
      {
        name: 'Ethereum documentation',
        link: '/ethereum-documentation',
        ignoreNextPrev: true
      },
      {
        name: 'Sample API calls',
        link: '/sample-calls',
        ignoreNextPrev: true
      },
      {
        name: 'Advanced Query tutorial',
        link: '/tutorial',
        ignoreNextPrev: true
      }
    ],
    footerLinks: [
      {
        name: 'OpenRPC',
        link: 'https://open-rpc.org'
      }
    ]
  },
  plugins: [
    "@xops.net/gatsby-openrpc-theme",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'pristine-site',
        short_name: 'pristine-site',
        start_url: '/',
        background_color: 'transparent',
        theme_color: '#3f51b5',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    }
  ],
}

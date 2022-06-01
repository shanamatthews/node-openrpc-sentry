
module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: 'Query & Transact Advanced Query APIs (preview)',
    description: "This document describes the preview APIs for Query and Transact's new Advanced Query APIs. See the [main Query and Transact documentation](https://docs.cloud.coinbase.com/blockchain-infrastructure/docs) for more information about Query and Transact. \n\n These APIs allow greater... TBD SHANA \n\n **API constraints:** \n - Only Ethereum protocol and mainnet (and testnet) networks are supported in this preview version of the APIs. Ethereum L2 chains and other protocols will be supported incrementally. \n - This preview version of the APIs only supports ETH, ERC-20 and ERC-721 tokens. \n   - The Balances and Contracts APIs only return results for ERC-20 and ERC-721 tokens. \n   - In the Transfers APIs, some metadata in the results might be available for ERC-20 and ERC-721 only. \n   - Note that the Contracts APIs are only relevant for the Ethereum ecosystem.",
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
        name: 'API Documentation',
        link: '/api-documentation'
      },
      {
        name: 'Ethereum documentation',
        link: '/ethereum-documentation'
      },
      {
        name: 'Sample API calls',
        link: '/sample-calls'
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

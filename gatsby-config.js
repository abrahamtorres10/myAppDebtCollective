module.exports = {
  siteMetadata: {
    title: `GitHub Repositories`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        variables: {
          org: "debtcollective",
        },
        graphQLQuery: `
          query ($org: String = "") {
            viewer {
              login
              name
            }
            organization(login: $org){
              id
              description
              login
              repositories(first: 100) {
                nodes {
                  description
                  id
                  isPrivate
                  name
                  forkCount
                  createdAt
                  url
                }
              }
            }
          }          
        `,
      },
    },
  ],
}

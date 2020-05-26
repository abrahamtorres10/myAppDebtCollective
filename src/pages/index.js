import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <p>Hi GitHub user: <strong>{data.githubData.data.viewer.login}</strong> </p>
     <p> We're gonna see all the ({data.githubData.data.organization.repositories.nodes.length}) repositories from <strong>
       {
        data.githubData.data.organization.login
       }</strong> enjoy !
     </p>
    <p>
      {
        data.githubData.data.organization.repositories.nodes.map((repo) => {
          return <p>{repo.name}</p>
        })
      }
    </p>
  </Layout>
)


export const query = graphql`
  query onGithub {
      githubData {
        data {
          viewer {
            login
          }
           organization {
            description
            id
            login
            repositories {
              nodes {
                description
                forkCount
                isPrivate
                name
                id
              }
            }
          }
        }
      }
  }
`;

export default IndexPage

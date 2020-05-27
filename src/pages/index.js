import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Repository from "../components/repository"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>
      Hi GitHub user: <strong>{data.githubData.data.viewer.login}</strong>{" "}
    </p>
    <p>
      {" "}
      We're gonna see all the (
      {data.githubData.data.organization.repositories.nodes.length})
      repositories from{" "}
      <strong>{data.githubData.data.organization.login}</strong> enjoy !
    </p>
    <div>
      {data.githubData.data.organization.repositories.nodes.map(repo => {
        return <Repository {...repo} />
      })}
    </div>
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
              createdAt
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage

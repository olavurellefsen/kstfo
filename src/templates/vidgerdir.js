import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/menu"
import MenuDK from "../components/dkmenu"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log()
  return (
    <Layout>
      <div>
        <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} />
        {post.fields.slug.substring(1,3)==='fo' && <Menu />}
        {post.fields.slug.substring(1,3)==='dk' && <MenuDK />}
        <div style={{ padding: `40px` }}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

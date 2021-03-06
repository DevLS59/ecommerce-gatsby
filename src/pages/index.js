import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'

const IndexPage = ( { data }) => (
    <Layout>
        <SEO title="Home" />
        <BackgroundSection 
        img={data.img.childImageSharp.fluid}
        title="DKK ECommerce "
        styleClass="default-background"
        />
        <Info />
    </Layout>
) 
export const query = graphql`
query {
  img: file(relativePath: { eq: "default-background.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage

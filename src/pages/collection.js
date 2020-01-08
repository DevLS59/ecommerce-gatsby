import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'
import Contact from '../components/home/Contact'

const IndexPage = ( { data }) => (
    <Layout>
        <SEO title="Collection" />
        <BackgroundSection 
        img={data.img.childImageSharp.fluid}
        title="collection"
        styleClass="collection-background"
        />
        <Info />
        <Contact />
    </Layout>
) 
export const query = graphql`
query {
  img: file(relativePath: { eq: "collection-background.jpg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'



const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="home" />
        <h2> mythLabs - Amit bisht - full stack developer</h2>
        <p>
          Need help? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage

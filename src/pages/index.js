import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"



const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h2> mythLabs - Amit bisht - full stack developer</h2>
        <p>
          Need help? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage

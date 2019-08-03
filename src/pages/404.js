import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Head from '../components/head'

const notfound = () => {
    return (
        <Layout>
             <Head title="not found" />
            <h1>Page not found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default notfound;
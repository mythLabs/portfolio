import React from 'react';
import {Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

import Layout from "../components/layout"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
                
              }
              html
              excerpt
              fields{
                slug
              }
            }
          }
        }
      }
  `)

    return (
        <div>
            <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return(
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                             <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            </Layout>
        </div>
    )
}


export default BlogPage;
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import './cardarea.css'

const CardArea = () => {
    const data = useStaticQuery(
        graphql`
            query MyQuery {
                allMarkdownRemark {
                    edges {
                        node {
                            id
                            frontmatter {
                                description
                                github
                                img
                                title
                                deployed
                            }
                        }
                    }
                }
            }
        `
    )
    
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </Helmet>
            <div id='card-container'>
                {data.allMarkdownRemark.edges.sort().map(({node}) => 
                    <div className='card' key={node.id}>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={node.frontmatter.img} alt={node.frontmatter.title}/>
                        </div>
                        <article className='card-content'>
                            <span className="card-title activator">{node.frontmatter.title}<i className="material-icons">more_vert</i></span>
                            <p>To see the GitHub for this project click <a target='_blank' rel='noreferrer' href={node.frontmatter.github}>here</a>.</p>
                        </article>
                        <summary className='card-reveal black'>
                            <span className="card-title">{node.frontmatter.title}<i className="material-icons">close</i></span>
                            <p>{node.frontmatter.description}<br></br><br></br>Click <a target='_blank' rel='noreferrer' href={node.frontmatter.deployed}>here</a> to go to the deployed application.</p>
                        </summary>
                    </div>
                )}
            </div>
        </>
    )
}

export default CardArea
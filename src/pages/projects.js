import React from 'react'
import { Helmet } from 'react-helmet'

import CardArea from '../components/CardArea'
import Layout from '../components/Layout'

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Samuel Gemberling - Projects</title>
            </Helmet>
            <Layout>
                <h2 className='title'>
                    <div>
                        My Projects
                    </div>
                </h2>
                <CardArea />
            </Layout>
        </>
    )
}

export default Projects
import React from 'react'
import { Helmet } from 'react-helmet'

import EmailForm from '../components/EmailForm'
import Layout from '../components/Layout'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Samuel Gemberling - Contact</title>
            </Helmet>
            <Layout>
                <EmailForm />
                <br></br>
                <br></br>
                <p id='resume-link'>
                    Click&nbsp;<a href='/Resume.pdf' target='#blank'>here</a>&nbsp;to look at my resume.
                </p>
            </Layout>
        </>
    )
}

export default Contact
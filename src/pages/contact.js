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
                <img src='' alt='resume'></img>
            </Layout>
        </>
    )
}

export default Contact
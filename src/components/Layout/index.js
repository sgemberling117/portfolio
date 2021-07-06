import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './layout.css'

const Layout = (props) => {
    return (
        <div className='container'>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
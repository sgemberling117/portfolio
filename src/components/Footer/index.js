import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='site-logo-area'>
                <a href='https://github.com/CodingSalmon'>
                    <img src='https://i.imgur.com/rMUF6ri.png' alt='GitHub Logo' className='site-logos'></img>
                </a>
                <a href='https://www.linkedin.com/in/samuel-gemberling/'>
                    <img src='https://i.imgur.com/89YFr03.png' alt='LinkedIn Logo' className='site-logos'></img>
                </a>
            </div>
            
            <p className='copyright'>Samuel Gemberling - Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
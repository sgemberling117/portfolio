import React from 'react'

import './popup.css'

const Popup = ({popup}) => {
    return (
        <aside className='aside'>
            <p>{popup}</p>
        </aside>
    )
}

export default Popup
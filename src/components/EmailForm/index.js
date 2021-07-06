import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import './emailform.css'

const EmailForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [popup, setPopup] = useState('Please provide your name and email before trying to send an email.')
    
    const [anim, setAnim] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        if(formData.name && (e.target.name === 'email' && e.target.value) || formData.email && (e.target.name === 'name' && e.target.value)) {
            setPopup('Thank you for sending me your contact info I will be in touch soon!')
        } else {
            setPopup('Please provide your name and email before trying to send an email.')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnim(true)
        window.setTimeout(() => {
            setAnim(false)
            console.log()
        }, 5000)
        if (formData.name && formData.email) {
            if (formData.message) {
                setFormData({name: '', email: '', message: ''})
            }
            setPopup('Please provide your name and email before trying to send an email.')
        }
    }

    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Helmet>
            <aside className='popup' id={anim ? 'fade': ''}>
                <p>{popup}</p>
            </aside>
            <h2 className='title'>
                <div>
                    Contact Me
                </div>
            </h2>
            <br></br>
            <div id='form-container'>
                <form className='form' name='contact' data-netlify='true'>
                    <div>Name:&nbsp;<input value={formData.name} onChange={handleChange} name='name' type='text' required></input></div>
                    <br></br>
                    <div>Email:&nbsp;<input value={formData.email} onChange={handleChange} name='email' type='email' required></input></div>
                    <br></br>
                    <div>Message:&nbsp;<textarea value={formData.message} onChange={handleChange} name='message'></textarea></div>
                    <br></br>
                    <div id='button-area'>
                        <button className='submitButton' type='submit' onClick={handleSubmit}>Send&nbsp;<i className='material-icons'>send</i></button>
                    </div>
                </form>
            </div>
        </>
    )
    
}

export default EmailForm
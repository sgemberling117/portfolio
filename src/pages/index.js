import React from "react"
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import TypeWriter from '../components/TypeWriter'

import '../styles/index.css'

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Samuel Gemberling</title>
      </Helmet>
      <Layout>
        <TypeWriter />
        <br></br>
        <h2 className='title'>
          <div>
            About Me
          </div>
        </h2>
        <div id='about-me'>
          <div>
            <p>I am a very inquisitive and disciplined software developer, during my 11 years in martial arts I learned that I will never know everything, so I am excited to learn anything and everything! From something as large as a different way somebody approaches their coding process to something as small as a nuanced edge case. I take pride in how quick I learn and I love creating tools to make other people’s lives easier.</p>
          </div>
        </div>
        <br></br>
        <h2 className='title'>
          <div>
            Skills
          </div>
        </h2>
        <div id='skills-area'>
          <div>
            <p>Technical Skills:</p>
            <ul className='skill-list'>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>mongoDB</li>
              <li>mongoose</li>
              <li>PostgreSQL</li>
              <li>Materialize</li>
            </ul>

            <p>Professional Skills:</p>
            <ul className='skill-list'>
              <li>Quick Learner</li>
              <li>Multitasking</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
        <br></br>
        <p>See some of my projects <Link to='/projects'>Here</Link></p>
        <br></br>
      </Layout>
    </>
  )
}

export default Index
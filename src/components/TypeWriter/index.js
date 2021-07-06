import React, { useState, useEffect } from 'react'

import './typewriter.css'

const Typewriter = () => {

    const [text, setText] = useState('')

    useEffect(() => {
        const sentences = ['Hello, my name is Sam.', 'I am a web developer.']

        let currentSentence = 0
        let letterCount = 0
        let waiting = false
        let changeInLetterCount = -1 

        setInterval(() => {
            setText(sentences[currentSentence].slice(0, letterCount))
            if (!letterCount && !waiting) {
                changeInLetterCount *= -1
                letterCount++
            }
            else if (letterCount === sentences[currentSentence].length && !waiting) {
                changeInLetterCount *= -1
                waiting = true
                window.setTimeout(function() {
                    letterCount--
                    waiting = false
                }, 3000)
            }
            else if (!waiting) {
                letterCount += changeInLetterCount
                if (letterCount === 0) {
                    currentSentence++
                    if (currentSentence === sentences.length) {
                        currentSentence = 0
                    }
                }
            }
        }, 120)
    }, [])

    return (
        <>
            <div id='text-container'>
                <span id='text'>{text}</span>&nbsp;
                <div id='pointer'>&#124;</div>
            </div>
        </>
    )
}

export default Typewriter
import React from 'react'
import './QuoteDisplay.css'

class QuoteDisplay extends React.Component {
    render() {
        return (
            <div id='quote-box'>
                <div id='text-box'>
                    <p id='text'>Some text</p>
                </div>
                <p id='author'>- Author</p>
                <button id='new-quote'>New quote</button>
            </div>
        )
    }
}

export default QuoteDisplay

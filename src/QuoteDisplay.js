import React from 'react'
import './QuoteDisplay.css'

class QuoteDisplay extends React.Component {
    render() {
        return (
            <div id='quote-box'>
                <div id='text-box'>
                    <i className='fas fa-quote-left'></i>
                    <span id='text'>Some text</span>
                </div>
                <p id='author'>- Author</p>
                <div id='buttons'>
                    <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a id='tumblr-quote'><i className='fab fa-tumblr'></i></a>
                    <button id='new-quote'>New quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteDisplay

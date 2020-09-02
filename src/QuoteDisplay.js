import React from 'react'
import './QuoteDisplay.css'

class QuoteDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.updateQuote.bind(this)
    }

    updateQuote() {

    }

    render() {
        return (
            <div id='quote-box'>
                <div id='text-box'>
                    <i className='fas fa-quote-left'></i>
                    <span id='text'></span>
                </div>
                <p id='author'>- </p>
                <div id='buttons'>
                    <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a id='tumblr-quote' href='https://www.tumblr.com/widgets/share/tool' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-tumblr'></i>
                    </a>
                    <button id='new-quote' onClick={this.updateQuote}>New quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteDisplay

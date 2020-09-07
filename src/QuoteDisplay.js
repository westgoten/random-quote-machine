import React from 'react'
import { fetchQuotes, changeQuote } from './actions'
import { connect } from 'react-redux'
import './QuoteDisplay.css'

class QuoteDisplay extends React.Component {
    componentDidMount() {
        this.props.fetchQuotes()
    }

    render() {
        return (
            <div id='quote-box'>
                <div id='text-box'>
                    <i className='fas fa-quote-left'></i>
                    <span id='text'>{this.props.currentQuote.quote}</span>
                </div>
                <p id='author'>- {this.props.currentQuote.author}</p>
                <div id='buttons'>
                    <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a id='tumblr-quote' href='https://www.tumblr.com/widgets/share/tool' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-tumblr'></i>
                    </a>
                    <button id='new-quote' onClick={this.props.changeQuote}>New quote</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return Object.assign({}, state)
}
  
function mapDispatchToProps(dispatch) {
    return {
        fetchQuotes: () => fetchQuotes()(dispatch),
        changeQuote: () => dispatch(changeQuote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDisplay)
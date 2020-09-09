import React from 'react'
import { fetchQuotes, changeQuote } from './actions'
import { connect } from 'react-redux'
import { getRandomInt } from './utils'
import './QuoteDisplay.css'

class QuoteDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'black',
            opacity: 1
        }
        this.colors = ['red', 'green', 'blue']
        this.updateQuote = this.updateQuote.bind(this)
    }

    componentDidMount() {
        this.props.fetchQuotes().then(() => {
            this.setState({ color: this.getRandomColor() })
        })
    }

    updateQuote() {
        this.props.changeQuote()
        this.setState({ color: this.getRandomColor() })
    }

    getRandomColor() {
        return this.colors[getRandomInt(this.colors.length)]
    }

    render() {
        return (
            <div id='wrapper' style={{ color: this.state.color, backgroundColor: this.state.color }}>
                <div id='quote-box'>
                    <div id='text-box' style={{ opacity: this.state.opacity }}>
                        <i className='fas fa-quote-left'></i>
                        <span id='text'>{this.props.currentQuote.quote}</span>
                    </div>
                    <p id='author' style={{ opacity: this.state.opacity }}>
                        - {this.props.currentQuote.author}
                    </p>
                    <div id='buttons'>
                        <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' 
                        rel="noopener noreferrer" style={{ backgroundColor: this.state.color }}>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a id='tumblr-quote' href='https://www.tumblr.com/widgets/share/tool' target='_blank' 
                        rel="noopener noreferrer" style={{ backgroundColor: this.state.color }}>
                            <i className='fab fa-tumblr'></i>
                        </a>
                        <button id='new-quote' onClick={this.updateQuote} 
                        style={{ backgroundColor: this.state.color }}>New quote</button>
                    </div>
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
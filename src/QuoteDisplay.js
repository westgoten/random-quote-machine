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
        this.colors = ['red', 'green', 'lightseagreen', 'darkgoldenrod', 'darkcyan', 'darkmagenta', 'dodgerblue', 
        'darkslategray', 'coral', 'midnightblue', 'limegreen', 'mediumturquoise', 'darkolivegreen', 'darkblue']
        this.quoteBox = React.createRef()

        this.updateQuote = this.updateQuote.bind(this)
        this.onTextOpacityTransitionEnd = this.onTextOpacityTransitionEnd.bind(this)
        this.setupTweetButtonLink = this.setupTweetButtonLink.bind(this)
        this.setupTumblrButtonLink = this.setupTumblrButtonLink.bind(this)
    }

    componentDidMount() {
        this.props.fetchQuotes().then(() => {
            this.setState({ 
                color: this.getRandomColor(),
                opacity: 0
            })
        })
    }

    updateQuote() {
        this.props.changeQuote()
        this.setState({
            color: this.getRandomColor(),
            opacity: 0
        })
    }

    getRandomColor() {
        return this.colors[getRandomInt(this.colors.length)]
    }

    onTextOpacityTransitionEnd() {
        this.setState({ opacity: 1 })
        this.setQuoteText()
    }

    setQuoteText() {
        const quoteBoxNode = this.quoteBox.current
        const text = quoteBoxNode.querySelector('#text')
        const author = quoteBoxNode.querySelector('#author')
        text.innerHTML = this.props.currentQuote.quote
        author.innerHTML = "- " + this.props.currentQuote.author
    }

    render() {
        return (
            <div id='wrapper' style={{ color: this.state.color, backgroundColor: this.state.color }}>
                <div id='quote-box' ref={this.quoteBox}>
                    <div id='text-box' style={{ opacity: this.state.opacity }} onTransitionEnd={this.onTextOpacityTransitionEnd}>
                        <i className='fas fa-quote-left'></i>
                        <span id='text'></span>
                    </div>
                    <p id='author' style={{ opacity: this.state.opacity }} onTransitionEnd={this.onTextOpacityTransitionEnd}>- </p>
                    <div id='buttons'>
                        <a id='tweet-quote' href={this.setupTweetButtonLink()} title='Tweet this quote!' target='_blank' rel="noopener noreferrer" style={{ backgroundColor: this.state.color }}>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a id='tumblr-quote' href={this.setupTumblrButtonLink()} title='Post this quote on tumblr!' target='_blank' rel="noopener noreferrer" style={{ backgroundColor: this.state.color }}>
                            <i className='fab fa-tumblr'></i>
                        </a>
                        <button id='new-quote' onClick={this.updateQuote} style={{ backgroundColor: this.state.color }}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }

    setupTweetButtonLink() {
        return 'https://twitter.com/intent/tweet?hashtags=quotes&text=' 
        + encodeURIComponent('"' + this.props.currentQuote.quote + '" - ' + this.props.currentQuote.author)
    }

    setupTumblrButtonLink() {
        return `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes
&caption=${encodeURIComponent(this.props.currentQuote.author)}&content=${this.props.currentQuote.quote}
&canonicalUrl=${encodeURIComponent('https://www.google.com')}`
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
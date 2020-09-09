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
        this.quoteBox = React.createRef()

        this.updateQuote = this.updateQuote.bind(this)
        this.onTextOpacityTransitionEnd = this.onTextOpacityTransitionEnd.bind(this)
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
        const quoteBoxNode = this.quoteBox.current
        const text = quoteBoxNode.querySelectorAll('#text')[0]
        const author = quoteBoxNode.querySelectorAll('#author')[0]
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
import { createReducer } from '@reduxjs/toolkit'
import { START_REQUEST, REQUEST_RESPONSE, CHANGE_QUOTE } from './actions'
import { getRandomInt } from './utils'

const initialState = {
    quoteList: [],
    currentQuote: {},
    hasRequestedData: false,
    isFetchingDone: false
}

const quotesReducer = createReducer(initialState, {
    [START_REQUEST]: (state) => Object.assign({}, state, { hasRequestedData: true }),
    [REQUEST_RESPONSE]: (state, action) => {
        const quoteList = action.payload.quotes
        const newState = Object.assign({}, state, { quoteList, isFetchingDone: true })
        newState.currentQuote = quoteList[getRandomInt(quoteList.length)]
        return newState
    },
    [CHANGE_QUOTE]: (state) => {
        const newQuote = state.quoteList[getRandomInt(state.quoteList.length)]
        return Object.assign({}, state, { currentQuote: newQuote })   
    }
})

export default quotesReducer

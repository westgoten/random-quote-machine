import { createReducer } from '@reduxjs/toolkit'
import { START_REQUEST, REQUEST_RESPONSE } from './actions'

const initialState = {
    quoteList: [],
    currentQuote: {},
    hasRequestedData: false,
    isFetchingDone: false
}

const quotesReducer = createReducer(initialState, {
    START_REQUEST: (state, action) => {},
    REQUEST_RESPONSE: (state, action) => {}
})

export default quotesReducer

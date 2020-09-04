export const START_REQUEST = 'start_request'
export const REQUEST_RESPONSE = 'request_response'
export const CHANGE_QUOTE = 'change_quote'

export function getQuotes(url) {
    return (dispatch) => {
        dispatch(startRequest())

        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then((response) => response.json)
        .then(data => {
            dispatch(requestResponse(data))
        })
        .catch(error => console.error(error))
    }
}

function startRequest() {
    return { type: START_REQUEST }
}

function requestResponse(payload) {
    return {
        type: REQUEST_RESPONSE,
        payload
    }
}

export function changeQuote() {
    return { type: CHANGE_QUOTE }
}

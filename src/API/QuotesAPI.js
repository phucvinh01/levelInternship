import instance from './customAPI'
function getQuote() {
    return instance.get(`https://api.quotable.io/random`)
}

export { getQuote }
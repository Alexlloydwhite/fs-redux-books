const bookList = (state = [], action) => {
    // TODO - set book list with data from server
    if (action.type === 'SET_BOOK_LIST') {
        // Action payload is a new array from server
        // It has ALL the information in it - no need to spread
        // and add to the pervious state
        return action.payload
    }
    return state;
}

export default bookList;
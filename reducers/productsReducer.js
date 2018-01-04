import products from '../blogpost.json';
const productsReducer = (state = {
    products: products.products,
    filterText: '',
    inStockOnly: false
}, action) => {
    switch (action.type) {
        case "UPDATE_FILTERTEXT":
            state = {
                ...state,
                filterText : action.payload
            }
        break;
        case "UPDATE_INSTOCK_FLAG":
            state = {
                ...state,
                inStockOnly : action.payload
            }
        break;
    }
    return state;
}

export default productsReducer;
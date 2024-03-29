export const cartReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    title: action.product.title,
                    id: action.product.id,
                    price: action.product.price,
                    image: action.product.image,
                    category: action.product.category
                }
            ];
        case 'REMOVE_FROM_CART':
            return state.filter((product) => product.id !== action.id);
        case 'EMPTY_CART':
            return[];
        default:
             return state;
    }
}
import { createContext,useReducer } from "react";
import { productReducer,initialState } from "../reducers/productsReducer";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productState,productDispatch] = useReducer(productReducer,initialState);
    return(
        <ProductContext.Provider value={{ productState, productDispatch }}>
            {children}
        </ProductContext.Provider>
    )
};
export default ProductContextProvider;
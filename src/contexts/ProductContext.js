import { createContext,useReducer,useEffect } from "react";
import { productReducer,initialState } from "../reducers/productsReducer";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productState,productDispatch] = useReducer(productReducer,initialState);
    return(
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
};
export default ProductContextProvider;
import { Children, createContext } from "react";

const initialState = {};

const reducer = (state, action) => {};

const cartContext = createContext();

function CartProvider({Children}) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return<CartContext.Provider value={state} >{Children}</CartContext.Provider>;
}

export default CartProvider;

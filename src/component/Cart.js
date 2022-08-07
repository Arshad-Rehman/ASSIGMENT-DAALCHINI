import React, { createContext, useEffect, useReducer} from "react";
import './cart.css';
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

const initialState={
  item:products,
  totalAmount: 0,
  totalItem: 0,
  items:products.title,
}

export  const CartContexts = createContext()

const Cart =()=>{
  const [state,dispatch]=useReducer(reducer,initialState);

const removeItems =(id)=>{
  return dispatch({
    type:"REMOVE_ITEM",
    payload: id
  })
}
const clearCart=()=>{
return dispatch({
  type:"CLEAR_CART"
})
}

const increment=(id)=>{
  return dispatch({
    type:"INCREMENT",
    payload: id
  })
}
const decrement=(id)=>{
  return dispatch({
    type:"DECREMENT",
    payload: id
  })
}


useEffect(()=>{
   dispatch({type: "TOTAL_ITEM"});
  console.log("awsome");
},[state.item])


return(
    <CartContexts.Provider value={{...state,removeItems,clearCart,increment,decrement}}>
    <ContextCart/>
      </CartContexts.Provider>
)
}
export default Cart;
// import React from "react";
// import { useState } from "react";
// import { createContext } from "react";
// import { ProductItem } from "../utils/fetchedProducts";

// export const CartContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < ProductItem.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// console.log(ProductItem);

// export const CartContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());
//   console.log(cartItems);

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = ProductItem.find((product) => product._id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.price;
//       }
//     }
//     return totalAmount;
//   };

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   const contextValue = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//     getTotalCartAmount,
//   };

//   return (
//     <CartContext.Provider value={contextValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// NEW NEW

import React, { useState } from "react";
import { createContext } from "react";
import { ProductItem } from "../utils/fetchedProducts";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < ProductItem.length; i++) {
    const item = ProductItem[i];
    cart[item._id] = 0; // Use "_id" as the key
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //
  console.log(cartItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductItem.find((product) => product._id === item); // Use "item" directly as it's the ID

        // Parse the price to a number
        const itemPrice = parseFloat(itemInfo.price);
        totalAmount += cartItems[item] * itemPrice;

        //totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2); // Ensure two decimal places for currency
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

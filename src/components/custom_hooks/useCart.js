import { useState } from "react";

const useCart = (init, products) => {
    const [cartItems, setCartItems] = useState(init);
  
    // Add cart
    const addCartItem = (id) => {
      const item = products.find(product => product.id === id);
      setCartItems((items)=>
        {
          const itemIndex = items.findIndex(currentItem => currentItem.id === id);
          
          if ( itemIndex === -1 ) {
            return [
              ...items,{ // Previously add items
              ...item, // Newly added item
              quantity: 1,
              }
            ];
          } else {
            return items.map(currentItem => 
              currentItem.id === id ?
              {
              ...item,
              quantity: parseInt(currentItem.quantity) + 1,
            } : currentItem);
          }
        }
      );
    };
  
    // Remove Cart Item
    const removeCartItem = (id) => {
      setCartItems((items) => items.filter(item => item.id !== id));
    };
  
    // Clear CartItems
    const clearCart = () => {
      const res = window.confirm('Are you sure to perform the action?');
      if (res === true) {
        setCartItems([]);
      }
    }
    return {
      cartItems,
      addCartItem,
      removeCartItem,
      clearCart,
    }
  }
  export default useCart;
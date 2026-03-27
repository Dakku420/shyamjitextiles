import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if item already exists in cart
    const itemExists = cart.some(
      (c) => c.category === item.category && c.index === item.index
    );

    if (!itemExists) {
      setCart(prevCart => [...prevCart, { ...item, quantity: 1, addedAt: new Date() }]);
      return true;
    }
    return false;
  };

  const removeFromCart = (category, index) => {
    setCart(prevCart =>
      prevCart.filter((item) => !(item.category === category && item.index === index))
    );
  };

  const updateQuantity = (category, index, quantity) => {
    if (quantity <= 0) {
      removeFromCart(category, index);
      return;
    }

    setCart(prevCart =>
      prevCart.map((item) =>
        item.category === category && item.index === index
          ? { ...item, quantity }
          : item
      )
    );
  };

  const isInCart = (category, index) => {
    return cart.some((item) => item.category === category && item.index === index);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      let priceVal = 0;
      if (typeof item.price === 'number') {
        priceVal = item.price;
      } else if (typeof item.price === 'string') {
        // Parse currency strings like "₹2,499" into 2499
        priceVal = parseFloat(item.price.replace(/[^\d.-]/g, ''));
      }
      return total + (isNaN(priceVal) ? 0 : priceVal) * item.quantity;
    }, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isInCart,
        getCartCount,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    // Check if item already exists in wishlist
    const itemExists = wishlist.some(
      (w) => w.category === item.category && w.index === item.index
    );
    
    if (!itemExists) {
      setWishlist(prevWishlist => [...prevWishlist, { ...item, addedAt: new Date() }]);
      return true;
    }
    return false;
  };

  const removeFromWishlist = (category, index) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter((item) => !(item.category === category && item.index === index))
    );
  };

  const isInWishlist = (category, index) => {
    return wishlist.some((item) => item.category === category && item.index === index);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

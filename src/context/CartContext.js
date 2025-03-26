import {
  addOrIncrementCartItem,
  buildCartItem,
  decrementCartItem,
  getQuantity,
  getTotalCartAmount,
  getTotalCartQuantity,
} from "@/lib/helpers/CartHelpers";
import { createContext, useState, useContext } from "react";
// Adjust the import path as needed

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * Adds a product (or its variant) to the cart or increments its quantity.
   *
   * @param {Object} product - The product object.
   * @param {Object|null} selectedVariant - The selected variant (if any).
   */
  const addItem = (product, selectedVariant = null) => {
    const newItem = buildCartItem(product, selectedVariant);
    setCart((prevCart) => addOrIncrementCartItem(prevCart, newItem));
  };

  /**
   * Decrements the quantity of a product (or its variant) in the cart.
   * Removes the item if the quantity falls below 1.
   *
   * @param {Object} product - The product object.
   * @param {Object|null} selectedVariant - The selected variant (if any).
   */
  const decrementItem = (product, selectedVariant = null) => {
    const targetItem = buildCartItem(product, selectedVariant);
    setCart((prevCart) => decrementCartItem(prevCart, targetItem));
  };

  /**
   * returns quantity of a product (or its variant) added in cart
   *
   * @param {number|string} productId - The product id.
   * @param {number|string|null} variantId - The variant id, if applicable.
   * @returns {number} The quantity of the matching cart item, or 0 if not found.
   */
  const getItemQuantity = (productId, variantId = null) => {
    return getQuantity(cart, productId, variantId);
  };

  // Wrapper for totalCartQuantity and totalCartAmount
  const totalCartQuantity = getTotalCartQuantity(cart);
  const totalCartAmount = getTotalCartAmount(cart);

  /**
   * Clears the entire cart.
   */
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decrementItem,
        clearCart,
        getItemQuantity,
        totalCartQuantity,
        totalCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

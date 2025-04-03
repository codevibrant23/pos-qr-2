"use client";

import {
  addOrIncrementCartItem,
  buildCartItem,
  decrementCartItem,
  getQuantity,
  getTotalCartAmount,
  getTotalCartQuantity,
  hasMultipleVariantsInCart,
  isProductVariant,
} from "@/lib/helpers/cart/CartActions";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  updateCartDataInLocalStorage,
  loadCartFromLocalStorage,
  getCartTimestamps,
} from "@/lib/helpers/cart/localStorageHelpers";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(() => loadCartFromLocalStorage());
  const [timestamps, setTimestamps] = useState(() => getCartTimestamps());

  // Add item to cart
  const addItem = useCallback((product, selectedVariant = null) => {
    const newItem = buildCartItem(product, selectedVariant);
    setCart((prevCart) => addOrIncrementCartItem(prevCart, newItem));
  }, []);

  // Decrement item from cart
  const decrementItem = useCallback((product, selectedVariant = null) => {
    const targetItem = buildCartItem(product, selectedVariant);
    setCart((prevCart) => decrementCartItem(prevCart, targetItem));
  }, []);

  // Get item quantity
  const getItemQuantity = (product) => {
    return getQuantity(cart, product);
  };

  const checkMultipleVaraintsInCart = useCallback(
    (productId) => {
      return hasMultipleVariantsInCart(cart, productId);
    },
    [cart]
  );

  // Clear the cart
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Open, close and toggle functions for cart trigger
  const openCart = () => {
    console.log("juhuh");
    setOpen(true);
  };

  const closeCart = () => {
    setOpen(false);
  };

  const toggle = (value) => {
    setOpen(value);
  };

  // Memoize total quantity and amount based on cart changes
  const totalCartQuantity = useMemo(() => getTotalCartQuantity(cart), [cart]);
  const totalCartAmount = useMemo(() => getTotalCartAmount(cart), [cart]);

  // Update localStorage and timestamps when cart changes
  useEffect(() => {
    updateCartDataInLocalStorage(cart);
    setTimestamps(getCartTimestamps());
  }, [cart]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      cartTrigger: {
        cartState: open,
        openCart,
        closeCart,
        toggle,
      },
      cart,
      addItem,
      decrementItem,
      clearCart,
      getItemQuantity,
      checkMultipleVaraintsInCart, // remains as a helper function reference (assumed pure)
      isProductVariant,
      totalCartQuantity,
      totalCartAmount,
      timestamps, // Contains createdOn and updatedOn values
    }),
    [
      open,
      cart,
      addItem,
      decrementItem,
      clearCart,
      checkMultipleVaraintsInCart,
      totalCartQuantity,
      totalCartAmount,
      timestamps,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

"use client";

const CART_KEY = "cartData";
const TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Updates the cart in LocalStorage with expiry.
 * - If the cart is already stored and not expired, it updates the value and updatedOn timestamp.
 * - If the cart is expired or not stored, it creates a new record.
 *
 * @param {Array} cart - The cart array to store.
 */
export const updateCartDataInLocalStorage = (cart) => {
  const now = Date.now();
  let storedCart = getCartFromLocalStorage();
  let cartObject = null;

  if (storedCart) {
    try {
      cartObject = JSON.parse(storedCart);
    } catch (error) {
      // If parsing fails, we'll treat it as if nothing was stored.
      cartObject = null;
    }
  }

  // If no valid cart exists or if it has expired, create a new record.
  if (!cartObject || now > cartObject.expiry) {
    cartObject = {
      value: cart,
      createdOn: now,
      updatedOn: now,
      expiry: now + TTL,
    };
  } else {
    // Update the existing cart, refresh the expiry and updatedOn timestamp.
    cartObject = {
      ...cartObject,
      value: cart,
      updatedOn: now,
      expiry: now + TTL,
    };
  }
  setCartInLocalStorage(cartObject);
};

/**
 * Loads the cart from localStorage.
 * If the cart exists and is not expired, returns the stored cart array.
 * Otherwise, returns an empty array.
 *
 * @returns {Array} The cart array.
 */
export const loadCartFromLocalStorage = () => {
  const cartObject = getCartFromLocalStorage();
  if (cartObject && Date.now() < cartObject.expiry) {
    return cartObject.value;
  }
  return [];
};

/**
 * Returns the cart timestamps from localStorage.
 *
 * @returns {Object|null} An object containing createdOn and updatedOn timestamps, or null if not available.
 */
export const getCartTimestamps = () => {
  const stored = getCartFromLocalStorage();
  if (stored) {
    try {
      const cartObject = JSON.parse(stored);
      return {
        createdOn: cartObject.createdOn,
        updatedOn: cartObject.updatedOn,
      };
    } catch (error) {
      return null;
    }
  }
  return null;
};

// -------------------- Private Helper Functions --------------------

const getCartFromLocalStorage = () => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CART_KEY);
  try {
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Error parsing cart data from localStorage", error);
    return null;
  }
};

const setCartInLocalStorage = (data) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(data));
};

const deleteCartFromLocalStorage = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_KEY);
};

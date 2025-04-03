// -------------------- Exported Functions --------------------

/**
 * Constructs a cart item from a product and an optional selectedVariant.
 * Public API for building a cart item.
 */
export const buildCartItem = (product, selectedVariant = null) => {
  return buildCartItemInternal(product, selectedVariant);
};

/**
 * Adds a new item to the cart or increments its quantity if it already exists.
 * Public API for updating the cart.
 */
export const addOrIncrementCartItem = (cart, newItem) => {
  return addOrIncrementCartItemInternal(cart, newItem);
};

/**
 * Decrements the quantity of a matching cart item.
 * Removes the item if the quantity falls below 1.
 * Public API for updating the cart.
 */
export const decrementCartItem = (cart, targetItem) => {
  return decrementCartItemInternal(cart, targetItem);
};

/**
 * Returns the quantity for a given product in the cart.
 *
 * Three scenarios are handled:
 * 1. If the product object has a "variants" array (base product with variants)
 *    and no specific variant is selected, the function sums the quantities
 *    of all variant items for that product in the cart.
 * 2. If the product is a simple product with no variants, it returns the
 *    quantity of the matching cart item (with no variant_id).
 * 3. If the product object includes a "variant_id" (i.e. it's a specific variant),
 *    it returns the quantity for that variant.
 *
 * @param {Array} cart - The current cart array.
 * @param {Object} product - The product object.
 * @returns {number} The quantity of the matching cart item(s), or 0 if not found.
 */
export const getQuantity = (cart, product) => {
  const productId = product.id;

  // Scenario 1: Base product with variants (no specific variant selected)
  if (
    product.variants &&
    product.variants.length > 0 &&
    product.variant_id == null
  ) {
    return cart.reduce((total, item) => {
      if (item.id === productId && item.variant_id != null) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  }

  // Scenario 3: Specific variant product (variant_id provided)
  if (product.variant_id != null) {
    const foundItem = cart.find(
      (item) => item.id === productId && item.variant_id === product.variant_id
    );
    return foundItem ? foundItem.quantity : 0;
  }

  // Scenario 2: Simple product (no variants)
  const foundItem = cart.find(
    (item) => item.id === productId && item.variant_id == null
  );
  return foundItem ? foundItem.quantity : 0;
};

/**
 * Returns the total quantity of all items in the cart.
 *
 * @param {Array} cart - The current cart array.
 * @returns {number} The sum of the quantities of all cart items.
 */
export const getTotalCartQuantity = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

/**
 * Returns the total amount of all items in the cart.
 * For variant items, uses variant_price; otherwise, uses price.
 *
 * @param {Array} cart - The current cart array.
 * @returns {number} The total cart amount.
 */
export const getTotalCartAmount = (cart) => {
  return cart.reduce((total, item) => {
    // Use variant_price if present, otherwise use price
    const price = item.variant_price
      ? parseFloat(item.variant_price)
      : parseFloat(item.price);
    return total + price * item.quantity;
  }, 0);
};

/**
 * Returns true if the cart contains multiple variant items for the given product.
 *
 * @param {Array} cart - The current cart array.
 * @param {number|string} productId - The product id.
 * @returns {boolean} True if multiple variants are present, false otherwise.
 */
export const hasMultipleVariantsInCart = (cart, productId) => {
  const variantItems = cart.filter(
    (item) => item.id === productId && item.variant_id != null
  );
  return variantItems.length > 1;
};

/**
 * Returns the list of variant items for the given product in the cart.
 *
 * @param {Array} cart - The current cart array.
 * @param {number|string} productId - The product id.
 * @returns {Array} The list of variant items.
 */
export const getVariantsInCartForProduct = (cart, productId) => {
  return cart.filter(
    (item) => item.id === productId && item.variant_id != null
  );
};

export const isProductVariant = (product) => {
  return isVariantItem(product);
};

// -------------------- Private Helper Functions --------------------

// Comparison Helpers

/**
 * Checks if an item has variant information.
 * Returns true if item.variant_id is not null or undefined.
 */
const isVariantItem = (item) => {
  return item.variant_id != null;
};

/**
 * Compares two items by product id.
 */
const isSameProduct = (item1, item2) => {
  return item1.id === item2.id;
};

/**
 * Compares two items by variant id.
 * Returns true if both items have a variant and their variant ids match.
 */
const isSameVariant = (item1, item2) => {
  if (isVariantItem(item1) && isVariantItem(item2)) {
    return item1.variant_id === item2.variant_id;
  }
  return false;
};

/**
 * Compares two cart items.
 * If either item is a variant, both must be variants and match in both product and variant.
 * Otherwise, only the product id is compared.
 */
const isSameItem = (item1, item2) => {
  if (isVariantItem(item1) || isVariantItem(item2)) {
    return (
      isVariantItem(item1) &&
      isVariantItem(item2) &&
      isSameProduct(item1, item2) &&
      isSameVariant(item1, item2)
    );
  }
  return isSameProduct(item1, item2);
};

// Building a Cart Item

/**
 * Removes the "variants" property from the product object.
 */
const getProductDataWithoutVariants = (product) => {
  if ("variants" in product) {
    const { variants, ...rest } = product;
    return rest;
  }
  return product;
};

/**
 * Adds variant details to a product data object.
 */
const addVariantDetails = (productData, selectedVariant) => {
  return {
    ...productData,
    variant_id: selectedVariant.id,
    variant_name: selectedVariant.name,
    variant_price: selectedVariant.price,
    variant_image: selectedVariant.variant_image,
    variant_description: selectedVariant.extra_description,
  };
};

/**
 * Finds a variant in the product's variants array by its ID.
 */
const findVariantById = (product, variantId) => {
  return product.variants?.find((variant) => variant.id === variantId) || null;
};

/**
 * Constructs a cart item from a product and an optional selectedVariant.
 * The resulting item has an initial quantity of 1.
 */
const buildCartItemInternal = (product, selectedVariantId = null) => {
  const productData = getProductDataWithoutVariants(product);
  const baseItem = { ...productData, quantity: 1 };

  if (selectedVariantId) {
    const selectedVariant = findVariantById(product, selectedVariantId);
    if (selectedVariant) {
      return addVariantDetails(baseItem, selectedVariant);
    }
  }

  return baseItem;
};

// Adding / Incrementing Cart Items

/**
 * Finds the index of a matching cart item in the cart array.
 */
const findCartItemIndex = (cart, newItem) => {
  return cart.findIndex((cartItem) => isSameItem(cartItem, newItem));
};

/**
 * Increments the quantity of a cart item at a given index.
 */
const incrementCartItemAtIndex = (cart, index) => {
  return cart.map((cartItem, idx) =>
    idx === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  );
};

/**
 * Adds a new item to the cart or increments its quantity if it already exists.
 */
const addOrIncrementCartItemInternal = (cart, newItem) => {
  const index = findCartItemIndex(cart, newItem);
  if (index !== -1) {
    return incrementCartItemAtIndex(cart, index);
  }
  return [...cart, newItem];
};

// Decrementing / Removing Cart Items

/**
 * Decrements the quantity for a given cart item.
 */
const decrementQuantity = (cartItem) => {
  return cartItem.quantity - 1;
};

/**
 * Removes an item from the cart based on its index.
 */
const removeItemFromCart = (cart, targetIndex) => {
  return cart.filter((_, idx) => idx !== targetIndex);
};

/**
 * Decrements the quantity of a matching cart item.
 * If the quantity falls below 1, the item is removed from the cart.
 */
const decrementCartItemInternal = (cart, targetItem) => {
  const index = findCartItemIndex(cart, targetItem);
  if (index === -1) {
    // No matching item found; return the cart as-is.
    return cart;
  }
  const currentItem = cart[index];
  const newQty = decrementQuantity(currentItem);
  if (newQty > 0) {
    return cart.map((cartItem, idx) =>
      idx === index ? { ...cartItem, quantity: newQty } : cartItem
    );
  } else {
    return removeItemFromCart(cart, index);
  }
};

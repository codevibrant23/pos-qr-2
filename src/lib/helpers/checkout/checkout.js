export const buildCheckoutCart = (cart) => {
  return cart.map((item) => {
    const productId = item.id;
    const quantity = item.quantity;

    if (item.variant_id) {
      const variantId = item.variant_id;
      return { product_variant: variantId, quantity: quantity };
    }

    return { product: productId, quantity: quantity };
  });
};

/**
 *  This function calculates total price of new order
 *  @param {Array} products cartProduct: Array of Objects
 *  @return {Number} Total price of products
 */
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};

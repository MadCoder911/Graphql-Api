const products = [
  {
    id: "redshoe",
    description: "Red shoe",
    price: 42.2,
  },
  {
    id: "manga",
    description: "manga",
    price: 10,
  },
];

function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  products.filter((product) => {
    return product.price > min && product.price < max;
  });
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
};

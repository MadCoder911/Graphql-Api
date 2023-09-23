const products = [
  {
    id: "y",
    description: "Red shoe",
    price: 42.2,
  },
  {
    id: "x",
    description: "manga",
    price: 15,
  },
];

function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}
function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};

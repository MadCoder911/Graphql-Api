const products = [
  {
    id: "y",
    description: "Red shoe",
    price: 42.2,
    reviews: [],
  },
  {
    id: "x",
    description: "manga",
    price: 15,
    reviews: [],
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
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}
function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);
  if (!matchedProduct) return;
  const newProductReview = {
    rating,
    comment,
  };
  return matchedProduct.reviews.push(newProductReview);
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};

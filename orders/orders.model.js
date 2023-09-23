const orders = [
  {
    date: "2005-05-95",
    subtotal: 40,
    items: [
      {
        product: {
          id: "x",
          description: "Red shoe",
          price: 42.2,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};
module.exports = {
  getAllOrders,
};

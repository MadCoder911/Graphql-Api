const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = buildSchema(`
type Query {
    products : [Product]
    orders: [Order]
 }
 
 type Product {
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }
 type Review {
        rating: Int
        comment: String
    }
    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }
    type OrderItem {
        product: Product!
        quantity: Int!
    }
 
 `);

const root = {
  products: [
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
  ],
  orders: [
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
  ],
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running graphQl server");
});

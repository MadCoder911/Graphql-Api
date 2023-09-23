const express = require("express");
const path = require("path");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
//
// const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
//
// const schemaText = `type Query {
//   products : [Product]
//   orders: [Order]
// }`;
//
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});
// const schema = buildSchema(`

//  `);

// const root = {
//   products: require("./products/products.model.js"),
//   orders: require("./orders/orders.model.js"),
// };

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running graphQl server");
});

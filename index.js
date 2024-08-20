const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");
const dotenv = require('dotenv').config()
const app = express();

mongoose.connect(process.env.DB);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");
});

app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server running on 3000");
});

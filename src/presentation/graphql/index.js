const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const schema = require('./schema')

const server = new ApolloServer({
  schema
});

const main = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

main();

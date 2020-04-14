import {ApolloServer} from 'apollo-server';
import books from './data';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      books: () => books,
    },
  }
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});


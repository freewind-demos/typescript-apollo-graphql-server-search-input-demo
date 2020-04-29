import {ApolloServer} from 'apollo-server';
import books from './data';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      books: () => books,
      searchBooks: (_: any, args: { input: { keyword: string } }) => {
        console.log("### args", {args});
        const keyword = args.input.keyword?.trim().toLowerCase() ?? '';
        if (keyword === '') {
          return books;
        } else {
          return books.filter(({title}) => keyword && title.toLowerCase().includes(keyword));
        }
      }
    },
  }
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});


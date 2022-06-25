import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log(import.meta.env.VITE_TOKEN_GRAPHCMS);
export const client = new ApolloClient({
  uri: import.meta.env.VITE_URI_GRAPHCMS,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_GRAPHCMS}`,
  },
  cache: new InMemoryCache(),
});

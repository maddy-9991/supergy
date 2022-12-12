// /lib/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'https://supergy.vercel.app/api/graphql',
  cache: new InMemoryCache(),
})

export default apolloClient
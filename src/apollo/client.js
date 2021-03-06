import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "cross-fetch"

const client = new ApolloClient({
    link: new HttpLink({
        uri: "/.netlify/functions/new-lolly",
        fetch,
    }),
    cache: new InMemoryCache()
})

export default client
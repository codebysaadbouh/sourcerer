import React from "react";
import {ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";

import ReactDom from "react-dom";
import App from "./App";
import styles from './index.module.css'
import * as dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.REACT_APP_TOKEN_GITHUB

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {authorization: `Bearer ${TOKEN}`}

})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


ReactDom.render(
    <ApolloProvider client={client}>    
        <App />  
    </ApolloProvider>, 
     document.getElementById('root'),
    
);




import React, { FunctionComponent, useState, useEffect } from 'react';
import {ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import './Home.css';

interface Person {
    avatarUrl : string;
    bio : string;
    company: string
    createdAt: string
    login: string
    url: string
}

const person = gql`
    query GetViewer{
        viewer {
            avatarUrl
            bio
            company
            createdAt
            login
            url
        }
    }
    `






const Home: FunctionComponent = () => {
    return (
        <div className="headerStatus">
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom mt={3} component="div">
                    h1. Heading
                </Typography>
            </Container>
        </div>
    );
}
export default Home;

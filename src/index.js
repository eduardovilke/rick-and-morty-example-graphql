import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box } from "@chakra-ui/react"
import App from './App';
import { ApolloProvider } from "@apollo/client";
import client from './services/apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
    <Box 
      w="100%" 
      h="100%" 
      bgGradient="linear-gradient(155deg, rgba(217,37,10,1) 0%, rgba(233,135,48,0.8155637254901961) 56%, rgba(217,37,10,1) 100%)"
    >
      <App />
    </Box>
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
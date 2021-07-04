import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import RootStack from 'navigation/RootStack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';

type TProps = {};

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = ({}: TProps) => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <RootStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

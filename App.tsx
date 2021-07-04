import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
// import tailwind from 'tailwind-rn';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import StackNavigator from './src/navigation/StackNavigator';

type TProps = {};

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = ({}: TProps) => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

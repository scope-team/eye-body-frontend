import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

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
      <View style={tailwind('h-full')}>
        <Text>123123123</Text>
      </View>
    </ApolloProvider>
  );
};

export default App;

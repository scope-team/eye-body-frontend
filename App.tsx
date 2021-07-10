import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import RootStack from '@navigation/RootStack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { stackContext, TCurrentStack } from '@/lib/context/useStackContext';

type TProps = {};

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = ({}: TProps) => {
  const [currentStack, setCurrentStack] = useState<TCurrentStack>('CameraStack');
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <stackContext.Provider value={{ currentStack, setCurrentStack }}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </stackContext.Provider>
    </ApolloProvider>
  );
};

export default App;

import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Views/home';
import Login from './Views/login';
import Produtos from './Views/Produtos';
import Pedido from './Views/Pedido';

export default function App(){

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Pedido" component={Pedido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

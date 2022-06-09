import React from 'react';
import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Produtos, Pedidos} from './Views';

export default function App(){

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ title: 'My Cakes', 
        headerStyle: {backgroundColor: '#FF8C00'},
        headerTintColor: '#FFFAFA',
        headerTitleStyle: {fontWeight: 'Bold', align: 'Center'},
    }}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Pedido" component={Pedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

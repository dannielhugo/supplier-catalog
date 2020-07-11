 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainView from './views/MainView';
import EditView from './views/EditView';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainView} />
        <Stack.Screen name="Edit" component={EditView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
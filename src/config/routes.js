import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from 'screens/Home';
import CityDetails from 'screens/CityDetails';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CityDetails" component={CityDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;

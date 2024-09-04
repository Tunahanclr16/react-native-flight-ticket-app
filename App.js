import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Me from './src/screens/Me';
import Plans from './src/screens/Plans';
import Flights from './src/screens/Flights';



// Tab navigatörü oluşturuluyor
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Plans" component={Plans} />
      <Tab.Screen name="Flights" component={Flights} />
        <Tab.Screen name="Me" component={Me} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

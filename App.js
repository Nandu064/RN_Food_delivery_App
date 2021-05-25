import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Font} from 'expo';
import Tabs from './navigation/tabs'
import {Home,Restaurant,OrderDelivary} from "./screens"

const Stack = createStackNavigator();


const App = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
                initialRouteName={"Home"}
          >
              <Stack.Screen name="Home" component = {Tabs} />
              <Stack.Screen name="Restaurant" component = {Restaurant} />
              <Stack.Screen name="OrderDelivary" component = {OrderDelivary} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Font} from 'expo';
import Tabs from './navigation/tabs'
import {Home,Restaurant,OrderDelivery,Search,MyProfile} from "./screens"

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
              <Stack.Screen name="OrderDelivery" component = {OrderDelivery} />
              <Stack.Screen name="Search" component = {Search} />
              <Stack.Screen name="MyProfile" component = {MyProfile} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import App from "./App";



const Stack = createStackNavigator()



function Mystack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name = 'Login'
      component = {Login}
      options = {{ headerShown : false}}
      />
      <Stack.Screen
      name = 'Home'
      component = {App}
      options = {{ headerShown : false}}
      />
     
      
    </Stack.Navigator>
  )
}

export default function  mainApp(){
  return(
      <NavigationContainer>
         <Mystack/> 
      </NavigationContainer>
  )
}